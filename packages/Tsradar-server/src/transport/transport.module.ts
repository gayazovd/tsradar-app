import { Module } from '@nestjs/common';
import { TransportController } from './transport.controller';
import { TransportService } from './transport.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Transport, TransportSchema} from "./schema/transport.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Transport.name, schema: TransportSchema }])],
  exports: [TransportService],
  controllers: [TransportController],
  providers: [TransportService]
})
export class TransportModule {}
