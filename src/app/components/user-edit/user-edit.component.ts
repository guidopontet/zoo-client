import { Component, OnInit } from '@angular/core'
import {Router,ActivatedRoute,Params} from '@angular/router';

import {User} from '../../models/user'
import {GLOBAL} from '../../services/global'
import {UserService} from '../../services/user.service'
import {UploadService} from '../../services/upload.service'

@Component({
	selector: 'user-edit',
	templateUrl: './user-edit.component.html',
	providers:[
		UserService,
		UploadService
	]
})

export class UserEditComponent implements OnInit{
	public title:string
	public user:User
	public identity
	public token:string
	public status
	public url

	constructor(
		private _userService: UserService,
		private _uploadService: UploadService
	){
		this.title='Actualizar mis datos'
		this.identity=this._userService.getIdentity()
		this.token=this._userService.getToken()
		this.user=this.identity
		this.url=GLOBAL.url
	}

	ngOnInit(){
		console.log("componente UserEditComponent cargado exitosamente")
	}

	onSubmit(){
		this._userService.updateUser(this.user).subscribe(
			response=>{
				if(!response.user){
					this.status='error'
				}else{
					this.status='success'
					// Si todo va bien actualizamos el usuario en el localStorage
					localStorage.setItem('identity',JSON.stringify(this.user))

					// SUBIDA DE IMAGEN
					this._uploadService.makeFileRequest(this.url+'uploadImageUser/'+this.user._id,[],this.filesToUpload,this.token,'image')
						.then((result:any)=>{
							this.user.image=result.user.image

							// Actualizamos la imagen del usuario en el localStorage
							localStorage.setItem('identity',JSON.stringify(this.user))
							// console.log(this.user)

						})
				}
			},
			error=>{
				this.status='error'
			}
		)
	}

	// Metodo para capturar los ficheros que selecciono
	public filesToUpload:Array<File>
	fileChangeEvent(fileInput: any){
		this.filesToUpload=<Array<File>>fileInput.target.files
		// console.log(this.filesToUpload)
	}
}