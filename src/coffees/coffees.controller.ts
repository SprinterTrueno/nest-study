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

@Controller("coffees")
export class CoffeesController {
  @Get()
  findAll(@Query() paginationQuery: { limit: number; offset: number }) {
    const { limit, offset } = paginationQuery;

    return `All coffees. Limit: ${limit}, Offset: ${offset}`;
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return `Coffee #${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body: { name: string }) {
    // create(@Body("name") name: string) {
    // return "Coffee created";
    return body;
    // return name;
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() body: { name: string }) {
    return `Coffee #${id} updated, ${JSON.stringify(body)}`;
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return `Coffee #${id} deleted`;
  }
}
