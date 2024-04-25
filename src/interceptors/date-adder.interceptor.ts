import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class DateAdderInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    
    const now = new Date();

    const formatDate = now.toLocaleDateString('es-AR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })

    // Accedemos al request:
    const request = context.switchToHttp().getRequest();
    // Agrego la metadata que quiero:
    request.now = formatDate;

    // Retorno obligado
    return next.handle();
  }
}
