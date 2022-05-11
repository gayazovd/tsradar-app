import {Controller, Delete, Get, Request, UseGuards} from '@nestjs/common';
import {UserService} from './user.service';
import {JwtAuthGuard} from '../auth/jwt-auth.guard';
import {ApiSecurity} from '@nestjs/swagger';

@Controller('user')
@UseGuards(JwtAuthGuard)
@ApiSecurity('access_token')
export class UserController {

    constructor(
        private userService: UserService
    ) {
    }

    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }

    @Delete('/remove')
    delete(@Request() req) {
        return this.userService.delete(req.user);
    }
}
