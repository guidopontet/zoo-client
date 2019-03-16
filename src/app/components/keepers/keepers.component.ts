import {Component,OnInit} from '@angular/core';
import {fadeIn} from '../animation'

import { User } from '../../models/user'
import { UserService } from '../../services/user.service'
import { GLOBAL } from '../../services/global'

//Definimos el componente con el decorador
@Component({
	selector: 'keepers',
	templateUrl: './keepers.component.html',
	providers: [
		UserService
	],
	animations: [fadeIn]
})

export class KeepersComponent{
	//PROPIEDADES
	public title:string;
	public keepers:User[]
	public url:string

	//CONSTRUCTOR
	constructor(
		private _userService: UserService
	){
		this.title="Cuidadores"
		this.url=GLOBAL.url
	}

	ngOnInit(){
		console.log("Componente Keepers cargado")
		this.getKeepers()
	}

	// OBTENER CUIDADORES
  	getKeepers(){
  		this._userService.getKeepers().subscribe(
    		response=>{
 	       		if(!response.users){

    	    	}else{
       				this.keepers=response.users
        		}
      		},
  			error=>{
        		console.log(<any>error)
      		})
  	}
} 