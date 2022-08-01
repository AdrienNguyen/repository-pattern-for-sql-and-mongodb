import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class User {
  @Prop()
  username: String;

  @Prop({ required: true })
  email: String;

  @Prop()
  password: String;
}

export const UserSchema = SchemaFactory.createForClass(User);
