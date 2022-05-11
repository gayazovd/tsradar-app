import {Body, Controller, Get, Post, Request, UseGuards} from '@nestjs/common';
import {LocalAuthGuard} from './local-auth.guard';
import {AuthService} from './auth.service';
import {RegisterUserDto} from './dto/register-user.dto';
import {LoginUserDto} from './dto/login-user.dto';
import {JwtAuthGuard} from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
    ) {
    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Body() loginUser: LoginUserDto) {
        return this.authService.login(loginUser)
    }

    @Post('registration')
    register(@Body() registerUser: RegisterUserDto): any {
        return this.authService.register(registerUser);
    }
}
