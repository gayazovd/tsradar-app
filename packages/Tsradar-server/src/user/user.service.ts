import {ConflictException, Injectable, InternalServerErrorException} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model, Types} from 'mongoose';
import {User, UserDocument} from './schema/user.schema';
import {CreateUserDto} from './dto/create-user.dto';
import {RegisterUserDto} from '../auth/dto/register-user.dto';
import {SoftDeleteModel} from 'soft-delete-plugin-mongoose';
import {TransportService} from '../transport/transport.service';
import {find as _find} from 'lodash';
import {mockUsers} from '../mock';

const usersList: CreateUserDto[] = mockUsers;

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)
        private userModel: SoftDeleteModel<UserDocument>,
        private transportService: TransportService
    ) {
    }

    async _createTestUsers(): Promise<User[]> | null {
        const users = await this._getAllUsers();
        if (!users.length) {
            return this.userModel.create(usersList);
        }
        return null;
    }

    async _getAllUsers(): Promise<User[]> {
        return this.userModel.find().exec()
    }

    async getUser(filter: { [key: string]: string }): Promise<User> | undefined {
        return this.userModel.findOne(filter);
    }

    async addUser({password_group, ...user}: RegisterUserDto): Promise<User> {
        const {username} = user;
        const isExist = await this.getUser({username: username});
        if (isExist) {
            throw new ConflictException('User already exist');
        }
        const registerUserData = {...user, password: password_group.password};
        return this.userModel.create(this.generateId(registerUserData));
    }

    private generateId(registerUser: Partial<RegisterUserDto>): Partial<RegisterUserDto> {
        const _id = new Types.ObjectId();
        return {_id, ...registerUser};
    }

    async delete(user: User): Promise<any> {
        try {
            const session = await this.userModel.db.startSession();
            console.log('start deleting');
            session.startTransaction();
            try {
                const filter = {_id: user._id};
                await this.userModel.softDelete(filter);
                await this.transportService.deleteTransport({userId: user._id})
                await session.commitTransaction();
                const deleted = _find(this.userModel.findDeleted(), filter);
                console.log('deleted: ', deleted)
                return deleted;
            } catch (error) {
                await session.abortTransaction();
                throw new InternalServerErrorException();
            } finally {
                session.endSession();
            }
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }
}
