import { PartialType } from "@nestjs/mapped-types";
import { CreateCoffeeDto } from "./createCoffee.dto";

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
