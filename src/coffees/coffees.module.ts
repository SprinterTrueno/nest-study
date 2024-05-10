import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Event } from "@/events/entities/event.entity";
import { CoffeesController } from "./coffees.controller";
import { CoffeesService } from "./coffees.service";
import { Coffee } from "./entities/coffee.entity";
import { Flavor } from "./entities/flavor.entity";

class MockCoffeesService {}

@Module({
  imports: [TypeOrmModule.forFeature([Event, Coffee, Flavor])],
  controllers: [CoffeesController],
  providers: [{ provide: CoffeesService, useValue: new MockCoffeesService() }],
  exports: [CoffeesService]
})
export class CoffeesModule {}
