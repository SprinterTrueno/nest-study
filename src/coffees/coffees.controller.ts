import { Controller, Get, Param } from "@nestjs/common";

@Controller("coffees")
export class CoffeesController {
  @Get()
  findAll() {
    return "All coffees";
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return `Coffee #${id}`;
  }
}
