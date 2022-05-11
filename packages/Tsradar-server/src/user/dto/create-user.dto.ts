import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';

export class CreateUserDto {
    @ApiPropertyOptional({example: '2123'})
    _id: string

    @ApiProperty({example: 'morty12'})
    username: string;

    @ApiProperty({example: 'morty'})
    name: string;

    @ApiProperty({example: 'white'})
    full_name: string;

    @ApiProperty({example: '123456'})
    password: string;

    @ApiProperty({example: 89123412311})
    phone: number
}
