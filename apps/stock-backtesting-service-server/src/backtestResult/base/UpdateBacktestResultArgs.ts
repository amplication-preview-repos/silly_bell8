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
import { BacktestResultWhereUniqueInput } from "./BacktestResultWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { BacktestResultUpdateInput } from "./BacktestResultUpdateInput";

@ArgsType()
class UpdateBacktestResultArgs {
  @ApiProperty({
    required: true,
    type: () => BacktestResultWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BacktestResultWhereUniqueInput)
  @Field(() => BacktestResultWhereUniqueInput, { nullable: false })
  where!: BacktestResultWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => BacktestResultUpdateInput,
  })
  @ValidateNested()
  @Type(() => BacktestResultUpdateInput)
  @Field(() => BacktestResultUpdateInput, { nullable: false })
  data!: BacktestResultUpdateInput;
}

export { UpdateBacktestResultArgs as UpdateBacktestResultArgs };
