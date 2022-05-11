import {Injectable} from '@nestjs/common';

@Injectable()
export class ConstantsService {
    public UNAUTHORIZED = {
        statusCode: 401,
        message: 'Incorrect mail or password'
    }
}