import {ApiProperty} from '@nestjs/swagger';


export class AccessTokenDto {
    @ApiProperty({example: 'sasmalksmlk1m21km321mne'})
    access_token: string;
}
