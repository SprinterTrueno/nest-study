import { Injectable, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Event } from "@/events/entities/event.entity";
import { COFFEE_BRANDS } from "./coffees.constants";
import { CoffeesController } from "./coffees.controller";
import { CoffeesService } from "./coffees.service";
import { Coffee } from "./entities/coffee.entity";
import { Flavor } from "./entities/flavor.entity";

class ConfigService {}
class DevelopmentConfigService {}
class ProductionConfigService {}

@Injectable()
export class CoffeeBrandsFactory {
  createCoffeeBrands() {
    return ["buddy brew", "nescafe"];
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([Event, Coffee, Flavor])],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    {
      provide: ConfigService,
      useClass:
        process.env.NODE_ENV === "development"
          ? DevelopmentConfigService
          : ProductionConfigService
    },
    CoffeeBrandsFactory,
    {
      provide: COFFEE_BRANDS,
      useFactory: (coffeeBrandsFactory: CoffeeBrandsFactory) => {
        return coffeeBrandsFactory.createCoffeeBrands();
      },
      inject: [CoffeeBrandsFactory]
    }
  ],
  exports: [CoffeesService]
})
export class CoffeesModule {}
