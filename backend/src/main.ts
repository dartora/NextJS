import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const cors = require('cors'); 
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  await app.listen(3001);
}
bootstrap();
