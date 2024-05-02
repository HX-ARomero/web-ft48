import {
	CanActivate,
	ExecutionContext,
	ForbiddenException,
	Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from 'src/role.enum';
  
@Injectable()
export class RolesGuard implements CanActivate {
	constructor(private readonly reflector: Reflector) {}
	
	canActivate(context: ExecutionContext): boolean {
		
		// Obtenemos el "Rol" desde la metadata del request:
		const requiredRoles = 
			this.reflector.getAllAndOverride<Role[]>('roles', [
				context.getHandler(),
				context.getClass(),
			]);
		
		const request = context.switchToHttp().getRequest();
		const user = request.user;
		
		// Validamos el Rol del Usuario:
		const hasRole = () =>
			requiredRoles.some((role) =>
				user?.roles?.includes(role));
		const valid = user && user.roles && hasRole();
    //* admin
    //* roles = [ 'user', 'guest' ]
		
		if (!valid) {
			throw new ForbiddenException(
				'No tiene permisos para acceder a esta ruta',
			);
		}
		
		return valid;
	}
}