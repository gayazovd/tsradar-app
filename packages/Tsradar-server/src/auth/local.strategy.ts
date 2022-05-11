import {PassportStrategy} from '@nestjs/passport';
import {Strategy} from 'passport-local';
import {Injectable, UnauthorizedException} from '@nestjs/common';
import {AuthService} from './auth.service';
import {ConstantsService} from '../common/constants.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(
        private authService: AuthService,
        private constants: ConstantsService
    ) {
        super();
    }

    async validate(username: string, password: string): Promise<any> {
        const user = await this.authService.validateUser(username, password);

        if (!user) {
            throw new UnauthorizedException({
                statusCode: this.constants.UNAUTHORIZED.statusCode,
                message: this.constants.UNAUTHORIZED.message
            });
        }

        return user;
    }
}
