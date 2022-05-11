import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';
import {Types} from 'mongoose';

export class PaginationDto {

    @ApiProperty({example: ''})
    userId: Types.ObjectId;

    @ApiProperty({example: ''})
    transportId: string; // as _id of transport model

    @ApiProperty({example: 'increase'})
    operation: string;

    @ApiProperty({example: 2})
    pageNumber: number;
}
