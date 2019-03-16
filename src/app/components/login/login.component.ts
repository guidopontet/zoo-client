import {Component,OnInit} from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';

import {User} from '../../models/user'
import {UserService} from '../../services/user.service'

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	providers:[
		UserService
	]
})

export class LoginComponent implements OnInit{
	public title: String;
	public user: User;
	public identity: User
	public token;
	public status: String;
	public errorMesage: String

	constructor(
		private _route:ActivatedRoute,
		private _router: Router,
		private _userService: UserService
	){
		this.title='Identificate'
		this.user=new User('','','','','','ROLE_USER','');
	}

	ngOnInit(){
		console.log("Componente Login cargado correctamente")
	}

	onSubmit(){
		// logueamos el usuario y conseguimos sus datos
		this._userService.signUp(this.user).subscribe(
			response=>{
				// Guardamos los datos del usuario en identity
				this.identity=response.user;

				// Si hay problemas de autenticación
				if(!this.identity || !this.identity._id){
					alert("El usuario no se ha logueado correctamente")
				}else{

					// GUARDAMOS EL USUARIO EN EL LOCAL STORAGE
					localStorage.setItem('identity',JSON.stringify(this.identity))

					// console.log(this.identity)
					// Si se loguea correctamente, necesitamos el TOKEN
					this._userService.signUp(this.user,'true').subscribe(
						response=>{
							
							this.token=response.token;
							
							// Si hay problemas de autenticación
							if(this.token.length<=0){
								alert("Error al generar el token de autenticación")
							}else{
								// Guardamos los datos del usuario en identity
								this.status='success'
								
								// GUARDAMOS EL TOKEN EN EL LOCALSTORAGE
								localStorage.setItem('token',this.token)

								// REDIRECCIONAMOS A HOME
								this._router.navigate(['/'])
							}
						},
						error=>{
							console.log(<any>error)
						}
					)
				}
			},
			error=>{
				// Definimos el mensaje de error según la respuesta de la API
				var errorM=JSON.parse(error._body)
				this.status='error' 
				this.errorMesage=errorM.message
				// console.log(this.errorMesage)
			}
		)
	}
}

