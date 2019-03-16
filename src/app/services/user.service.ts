import {Injectable} from '@angular/core'
import {Http,Response,Headers} from '@angular/http'
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable'
import {GLOBAL} from './global'

@Injectable()
export class UserService{
	public url:string
	public identity
	public token;

	constructor(
		private _http:Http
	){
		this.url=GLOBAL.url;
	}

	// REGISTRAR USUARIO
	register(user_to_register){
		// Definimos los datos a enviar al API
		let params=JSON.stringify(user_to_register)

		let headers= new Headers({'Content-Type':'application/json'});

		return this._http.post(this.url+'register',params,{headers})
			.map(res=>res.json());
	}

	// LOGUEAR UUSUARIO
	signUp(user_to_login,getToken=null){

		if(getToken!=null){
			user_to_login.getToken=getToken
		}

		let params=JSON.stringify(user_to_login);
		let headers= new Headers({'Content-Type':'application/json'});

		return this._http.post(this.url+'login',params,{headers})
			.map(res=>res.json());
	}

	// MODIFICAR USUARIO
	updateUser(user_to_update){
		let params=JSON.stringify(user_to_update)

		// Enviamos las cabeceras con el token 
		let headers=new Headers({
			'Content-Type': 'application/json',
			'Authorization': this.getToken()
		})

		return this._http.put(this.url+'update-user/'+user_to_update._id,params,{headers})
			.map(res=>res.json())
	}

	// Devolver el objeto User si está almacenado en el localStorage
	getIdentity(){
		let identity=JSON.parse(localStorage.getItem('identity'))

		if(identity!='undefined'){
			this.identity=identity
		}else{
			this.identity=null
		}

		return this.identity;
	}

		// Devolver el token de usuario si está almacenado en el localStorage
	getToken(){
		let token=localStorage.getItem('token')

		if(token!='undefined'){
			this.token=token
		}else{
			this.token=null
		}

		return this.token;
	}

	// DEVOLVER CUIDADORES
	getKeepers(){
		return this._http.get(this.url+'keepers')
			.map(res=>res.json());
	}
}