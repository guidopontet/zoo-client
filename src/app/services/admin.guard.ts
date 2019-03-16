// UTILIZADO PARA RESTRINGIR EL ACCESO A LOS COMPONENTES DE ADMIN
import { Injectable } from '@angular/core'
import { Router , CanActivate } from '@angular/router'

import { UserService } from './user.service'

@Injectable()
export class AdminGuard implements CanActivate{

	constructor(
		private _userService:UserService,
		private _router:Router
	){

	}

	canActivate(){
		// Obtenemos los datos del usuario logueado
		let identity=this._userService.getIdentity();

		if(identity && identity.role=='ROLE_ADMIN'){
			return true;
		}else{
			this._router.navigate(['/'])
			return false;
		}
	}
}