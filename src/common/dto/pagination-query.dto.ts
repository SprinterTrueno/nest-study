import { IsOptional, IsPositive } from "class-validator";

export class PaginationQueryDto {
  // 可选参数。
  @IsOptional()
  // 必须为正整数。
  @IsPositive()
  limit: number;

  @IsOptional()
  @IsPositive()
  offset: number;
}
