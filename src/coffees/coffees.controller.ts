import { Controller, Get } from "@nestjs/common";

@Controller("coffees")
export class CoffeesController {
  @Get()
  findAll() {
    return "All coffees";
  }

  @Get("flavors")
  findAllFlavors() {
    return "All coffees flavors";
  }
}
