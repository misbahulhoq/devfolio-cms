// api/index.ts
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './src/app.module';
import { clientUrl } from './src/lib/client-info';

const server = express();
let ready: Promise<void> | null = null;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.enableCors({
    origin: [clientUrl],
    credentials: true,
  });

  await app.init(); // NOT app.listen() — Vercel handles the actual listening
}

export default async function handler(req: any, res: any) {
  if (!ready) ready = bootstrap();
  await ready;
  server(req, res);
}
