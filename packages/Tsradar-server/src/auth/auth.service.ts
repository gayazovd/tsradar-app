import {Injectable, NotFoundException} from '@nestjs/common';
import {UserService} from '../user/user.service';
import {User} from '../user/schema/user.schema';
import {JwtService} from '@nestjs/jwt';
import {RegisterUserDto} from './dto/register-user.dto';
import {LoginUserDto} from './dto/login-user.dto';
import {AccessTokenDto} from './dto/access-token.dto';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {
    }

    async validateUser(username: string, password: string): Promise<Partial<User>> {
        const user = await this.userService.getUser({username});
        if (user && user.password === password) {
            const {full_name, _id} = user;
            return {full_name, _id};
        }

        return null;
    }

    async login({username}: LoginUserDto): Promise<AccessTokenDto> {
        const {full_name, _id, isDeleted} = await this.userService.getUser({username})

        if (isDeleted) {
            throw new NotFoundException(`User ${username} is not found`);
        }

        const payload = {name: full_name, sub: _id}

        return {
            access_token: this.jwtService.sign(payload),
        }
    }

    async register(registerUserDto: RegisterUserDto): Promise<User> {
        try {
            return this.userService.addUser(registerUserDto);
        } catch (e) {
            throw e;
        }
    }
}
