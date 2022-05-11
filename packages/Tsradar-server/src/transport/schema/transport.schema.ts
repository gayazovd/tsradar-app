import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document, Types} from 'mongoose';
import {softDeletePlugin} from 'soft-delete-plugin-mongoose';

@Schema()
export class Transport {
    @Prop()
    brand: string;

    @Prop()
    type: string;

    @Prop()
    transport_type: string;

    @Prop()
    status: boolean;

    @Prop()
    carcass: string;

    @Prop()
    power: string;

    @Prop()
    color: string;

    @Prop()
    userId: Types.ObjectId;
}

export type TransportDocument = Transport & Document;
export const TransportSchema = SchemaFactory.createForClass(Transport).plugin(softDeletePlugin);
