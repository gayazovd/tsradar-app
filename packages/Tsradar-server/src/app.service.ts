import {Injectable} from '@nestjs/common';
import {UserService} from './user/user.service';
import {TransportService} from './transport/transport.service';

@Injectable()
export class AppService {
    constructor(
        private userService: UserService,
        private transportService: TransportService
    ) {
        this.init();
    }

    init(): void {
        this.userService._createTestUsers().then(async () => {
            const transports = await this.transportService._getAll()
            if (!transports.length) {
                const users = await this.userService._getAllUsers();
                users.forEach(user => {
                    this.transportService._createTestTransportData(user._id)
                })
                console.log(`test users is created`);
            }
        });
    }
}
