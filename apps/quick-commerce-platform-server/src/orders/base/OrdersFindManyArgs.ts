/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrdersWhereInput } from "./OrdersWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { OrdersOrderByInput } from "./OrdersOrderByInput";

@ArgsType()
class OrdersFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => OrdersWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => OrdersWhereInput, { nullable: true })
  @Type(() => OrdersWhereInput)
  where?: OrdersWhereInput;

  @ApiProperty({
    required: false,
    type: [OrdersOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [OrdersOrderByInput], { nullable: true })
  @Type(() => OrdersOrderByInput)
  orderBy?: Array<OrdersOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { OrdersFindManyArgs as OrdersFindManyArgs };