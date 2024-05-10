import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CoffeesModule } from "./coffees/coffees.module";
import { CoffeeRatingModule } from "./coffee-rating/coffee-rating.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "101.42.43.155",
      port: 5432,
      username: "postgres",
      password: "pass123",
      database: "mydatabase",
      autoLoadEntities: true,
      synchronize: true
    }),
    CoffeesModule,
    CoffeeRatingModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
