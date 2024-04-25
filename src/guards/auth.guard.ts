import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

function validateRequest(request: Request) {
  // Obtener el Token de acceso:
  const token = request.headers['token'];
  // Validar Token:
  return token === 'ValidToken';
}

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    
    // Acceedemos al request:
    const request = context.switchToHttp().getRequest();
    console.log(context);

    // Ejecuto Validador
    return validateRequest(request);
  }
}
