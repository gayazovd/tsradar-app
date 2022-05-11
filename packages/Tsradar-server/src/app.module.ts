import {Module} from '@nestjs/common';
import {AppService} from './app.service';
import {UserModule} from './user/user.module';
import {MongooseModule} from '@nestjs/mongoose';
import {TransportModule} from './transport/transport.module';
import {AuthModule} from './auth/auth.module';

import {CommonModule} from './common/common.module';

@Module({
    imports: [
        UserModule,
        MongooseModule.forRoot('mongodb://root:test@localhost'),
        TransportModule,
        AuthModule,
        CommonModule
    ],
    providers: [AppService],
})
export class AppModule {
}
