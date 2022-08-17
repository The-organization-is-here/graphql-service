import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ProfileCreation {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  description: string;

  @Field(() => [String], { nullable: true })
  tags?: string[];
}
