import { Controller, Get, Param, Post, Body } from "@nestjs/common";

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

  @Post()
  create(@Body() body: { name: string }) {
    // create(@Body("name") name: string) {
    // return "Coffee created";
    return body;
    // return name;
  }
}
