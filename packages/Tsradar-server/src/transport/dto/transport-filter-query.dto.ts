import {ApiPropertyOptional} from '@nestjs/swagger';
import {Types} from 'mongoose';

export class TransportFilterQueryDto {
    @ApiPropertyOptional({example: ''})
    userId: Types.ObjectId;

    @ApiPropertyOptional({example: ''})
    transportId: string;
}
