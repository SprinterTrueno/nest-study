import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { AppModule } from "./app.module";
import { HttpExceptionFilter } from "./common/filters/http-exception.filter";
import { WrapResponseInterceptor } from "./common/interceptor/wrap-response.interceptor";
import { TimeoutInterceptor } from "./common/interceptor/timeout.interceptor";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true
      }
    })
  );
  app.useGlobalInterceptors(
    new WrapResponseInterceptor(),
    new TimeoutInterceptor()
  );
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}

bootstrap();
