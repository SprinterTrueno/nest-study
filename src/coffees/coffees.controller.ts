import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query
} from "@nestjs/common";
import { CoffeesService } from "./coffees.service";
import { CreateCoffeeDto } from "./dto/createCoffee.dto";
import { UpdateCoffeeDto } from "./dto/updateCoffee.dto";

@Controller("coffees")
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}
  @Get()
  findAll(@Query() paginationQuery: { limit: number; offset: number }) {
    const { limit, offset } = paginationQuery;
    console.log(limit, offset);

    return this.coffeesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number) {
    // ValidationPipe.transform() 自动转换类型了。
    console.log(typeof id);

    return this.coffeesService.findOne(id.toString());
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeesService.create(createCoffeeDto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeesService.update(id, updateCoffeeDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.coffeesService.remove(id);
  }
}
