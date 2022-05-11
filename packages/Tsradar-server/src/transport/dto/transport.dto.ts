import {ApiProperty} from '@nestjs/swagger';

export class TransportDto {
    @ApiProperty({example: 'kia'})
    brand: string;

    @ApiProperty({example: 'business'})
    type: string;

    @ApiProperty({example: 'car'})
    transport_type: string;

    @ApiProperty({example: 'false'})
    status: boolean;

    @ApiProperty({example: 'седан'})
    carcass: string;

    @ApiProperty({example: 140})
    power: number;

    @ApiProperty({example: 'black'})
    color: string;

    @ApiProperty({example: ''})
    userId: string;
}
