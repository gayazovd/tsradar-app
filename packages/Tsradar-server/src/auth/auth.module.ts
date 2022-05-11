import {Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {PassportModule} from '@nestjs/passport';
import {LocalStrategy} from './local.strategy';
import {UserModule} from '../user/user.module';
import {JwtModule} from '@nestjs/jwt';
import {JwtStrategy} from './jwt.strategy';
import {AuthController} from './auth.controller';
import {CommonModule} from '../common/common.module';

@Module({
    imports: [
        PassportModule,
        UserModule,
        CommonModule,
        JwtModule.register(
            {
                secret: 'SECRET',
                signOptions: {expiresIn: '1h'}
            }
        )],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    exports: [AuthService],
    controllers: [AuthController]
})
export class AuthModule {
}
