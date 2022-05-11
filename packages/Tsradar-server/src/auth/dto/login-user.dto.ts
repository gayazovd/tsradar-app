import {ApiProperty} from '@nestjs/swagger';


export class LoginUserDto {

    @ApiProperty({example: 'test@mail.ru'})
    username: string;

    @ApiProperty({example: 'Pass12345'})
    password: string;
}
