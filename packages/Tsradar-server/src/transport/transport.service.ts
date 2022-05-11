import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Types, UpdateQuery} from 'mongoose';
import {Transport, TransportDocument} from './schema/transport.schema';
import {TransportDto} from './dto/transport.dto';
import {TransportFilterQueryDto} from './dto/transport-filter-query.dto';
import {SoftDeleteModel} from 'soft-delete-plugin-mongoose';
import {UpdateTransportDto} from './dto/update-transport.dto';
import {PaginationDto} from './dto/pagination.dto';
import {manyTransportsMock} from '../mock';
import {takeRight as _takeRight} from 'lodash';
import {countDto} from './dto/transports-first.dto';

const transportList: TransportDto[] = manyTransportsMock;

@Injectable()
export class TransportService {
    constructor(
        @InjectModel(Transport.name)
        private transportModel: SoftDeleteModel<TransportDocument>
    ) {
    }

    async _createTestTransportData(userId: string): Promise<Transport[]> {
        return this.transportModel.create(
            transportList.map(transport => {
                return {
                    ...transport,
                    userId
                }
            })
        )
    }

    async _getAll(): Promise<Transport[]> {
        return this.transportModel.find().exec();
    }

    async createTransport(transport: TransportDto): Promise<Transport[]> {
        await this.transportModel.create(transport);
        return this.transportModel.find({userId: transport.userId});
    }

    async updateTransport({transportId}: UpdateTransportDto, {userId, ...transport}: UpdateQuery<any>): Promise<any> {
        const filter = {_id: transportId};
        await this.transportModel.updateOne(filter, transport);
        return this.getTransportsByQueryFilter(userId);
    }

    async softDeleteTransport({transportId, userId}: TransportFilterQueryDto): Promise<Array<Transport>>  {
        const filter = {_id: new Types.ObjectId(transportId)};
        await this.transportModel.softDelete(filter);
        return this.getTransportsByQueryFilter(userId as Partial<TransportFilterQueryDto>)
    }

    async deleteTransport(filter: any) {
        return this.transportModel.deleteMany(filter);
    }

    async getTransportsByQueryFilter(userId: Partial<TransportFilterQueryDto>): Promise<Array<Transport>> {
        return this.transportModel.find({userId}).exec();
    }

    // TODO will think about pagination
    async getCountDocuments(userId: Partial<TransportFilterQueryDto>): Promise<countDto> {
        const count = await this.transportModel.find({userId}).countDocuments();
        return new Promise(resolve => resolve({count}));
    }

    // TODO will think about pagination
    async getLimitTransportList({userId, transportId, operation}: PaginationDto) {
        const settings = {
            'increase': '$gt',
            'decrease': '$lt'
        }

        const filter = {userId, _id: {[settings[operation]]: transportId}}

        if (operation === 'decrease') {
            const transports = await this.transportModel.find(filter).exec();
            return _takeRight(transports, 10);
        }

        return this.transportModel.find(filter).limit(10).exec();

    }
}
