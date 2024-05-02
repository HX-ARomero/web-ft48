import {
	CanActivate,
	ExecutionContext,
	Injectable,
	UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
  
@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private jwtService: JwtService) {}
	
	canActivate(
		context: ExecutionContext,
	): boolean | Promise<boolean> | Observable<boolean> {
		const request = context.switchToHttp().getRequest();
		const token = request.headers.authorization?.split(' ')[1];
		
		if (!token) {
			throw new UnauthorizedException('Se necesita un Token');
		}
		
		try {
			const secret = process.env.JWT_SECRET;
			const payload = this.jwtService.verify(token, { secret });
			// payload posee las propiedades:
			// iat: issued at (emitido a las...)
			// exp: expire at (expira a las...)
			// Lo siguiente es sólo para dar formato de fecha y hora:
			payload.iat = new Date(payload.iat * 1000);
			payload.exp = new Date(payload.exp * 1000);
			
			//* => TOKEN => payload: { .... }
			// Dar permisos de administrador:
			payload.roles = ['admin']; //* ROL => Desde BBDD
			//* user = { isAdmin: true }
			// Guardamos "payload" dentro del "request":
			request.user = payload;
			
			console.log(payload);
			
			return true;
		} catch (error) {
			throw new UnauthorizedException('Token inválido');
		}
	}
}