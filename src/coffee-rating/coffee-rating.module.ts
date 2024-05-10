import { Module } from "@nestjs/common";
import { CoffeesModule } from "@/coffees/coffees.module";
import { CoffeeRatingService } from "./coffee-rating.service";
import { DatabaseModule } from "@/database/database.module";

@Module({
  imports: [
    DatabaseModule.register({
      type: "postgres",
      host: "101.42.43.155",
      port: 5432
    })
  ],
  providers: [CoffeeRatingService]
})
export class CoffeeRatingModule {}
