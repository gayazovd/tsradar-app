import {Controller, Get, Request, Post, Query, UseGuards, Body, Delete, Put} from '@nestjs/common';
import {JwtAuthGuard} from '../auth/jwt-auth.guard';
import {TransportService} from './transport.service';
import {TransportFilterQueryDto} from './dto/transport-filter-query.dto';
import {TransportDto} from './dto/transport.dto';
import {ApiSecurity} from '@nestjs/swagger';
import {UpdateTransportDto} from './dto/update-transport.dto';
import {PaginationDto} from './dto/pagination.dto';

@Controller('transport')
@UseGuards(JwtAuthGuard)
@ApiSecurity('access_token')
export class TransportController {
    constructor(
        private transportService: TransportService
    ) {
    }

    @Get('/')
    getByUserId(@Request() req) {
        return this.transportService.getTransportsByQueryFilter(req.user._id);
    }

    @Get('/count')
    getCount(@Request() req) {
        return this.transportService.getCountDocuments(req.user._id);
    }

    @Get('/list')
    getLimitByQuery(@Request() req, @Query() pagination: PaginationDto) {
        const paginationWithUserId = {...pagination, userId: req.user._id};
        return this.transportService.getLimitTransportList(paginationWithUserId);
    }

    @Post('/create')
    create(@Request() req, @Body() transport: TransportDto) {
        const transportWithUserId = {...transport, userId: req.user._id}
        return this.transportService.createTransport(transportWithUserId)
    }

    @Put('/update')
    update(@Request() req, @Query() updateTransport: UpdateTransportDto, @Body() transport: TransportDto) {
        const transportFilterWidthUserId = {...transport, userId: req.user._id}
        return this.transportService.updateTransport(updateTransport, transportFilterWidthUserId);
    }

    @Delete('/remove')
    delete(@Request() req, @Query() transportFilterQueryDto: TransportFilterQueryDto) {
        const transportFilterWidthUserId = {...transportFilterQueryDto, userId: req.user._id}
        return this.transportService.softDeleteTransport(transportFilterWidthUserId);
    }
}
