import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';
import {Types} from 'mongoose';

export class RegisterUserDto {
    @ApiPropertyOptional({example: '1210212kldsds'})
    _id: Types.ObjectId;

    @ApiProperty({example: 'morty12'})
    username: string;

    @ApiProperty({example: 'morty'})
    name: string;

    @ApiProperty({example: 'white'})
    full_name: string;

    @ApiProperty({example: {confirm_password: 'asasas', password: 'asasas'}})
    password_group: PasswordGroup;

    @ApiProperty({example: 89123412311})
    phone: number
}

interface PasswordGroup {
    confirm_password: string;
    password: string;
}