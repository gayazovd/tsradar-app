import {ApiProperty} from '@nestjs/swagger';

export class UpdateTransportDto {
    @ApiProperty({example: ''})
    transportId: string;
}
