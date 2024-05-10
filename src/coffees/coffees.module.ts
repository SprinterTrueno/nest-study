import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Event } from "@/events/entities/event.entity";
import { COFFEE_BRANDS } from "./coffees.constants";
import { CoffeesController } from "./coffees.controller";
import { CoffeesService } from "./coffees.service";
import { Coffee } from "./entities/coffee.entity";
import { Flavor } from "./entities/flavor.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Event, Coffee, Flavor])],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    { provide: COFFEE_BRANDS, useValue: ["buddy brew", "nescafe"] }
  ],
  exports: [CoffeesService]
})
export class CoffeesModule {}
