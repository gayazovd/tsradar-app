import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';

export class userFilterDto {
    @ApiPropertyOptional({example: '2123'})
    userId: string
}
