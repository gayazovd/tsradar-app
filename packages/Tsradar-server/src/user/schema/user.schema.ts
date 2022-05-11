import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import {softDeletePlugin} from 'soft-delete-plugin-mongoose';

@Schema()
export class User {
    @Prop()
    _id?: string;

    @Prop()
    username: string;

    @Prop()
    name: string;

    @Prop()
    full_name: string;

    @Prop()
    password: string;

    @Prop()
    phone: string;

    @Prop()
    isDeleted: boolean

}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User).plugin(softDeletePlugin);
