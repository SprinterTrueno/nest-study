import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Event } from "@/events/entities/event.entity";
import { CoffeesController } from "./coffees.controller";
import { CoffeesService } from "./coffees.service";
import coffeesConfig from "./config/coffees.config";
import { Coffee } from "./entities/coffee.entity";
import { Flavor } from "./entities/flavor.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Event, Coffee, Flavor]),
    ConfigModule.forFeature(coffeesConfig)
  ],
  controllers: [CoffeesController],
  providers: [CoffeesService],
  exports: [CoffeesService]
})
export class CoffeesModule {}
