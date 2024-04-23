import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`Ejecutando método ${req.method} a la ruta users${req.url}`);
    next();
  }
}

export function LoggerGlobalMiddleware(
  req: Request, res: Response, next: NextFunction
) {
  console.log(`Ejecutando Middleware Global: método ${req.method} a la ruta ${req.url}`);
    next();
}
