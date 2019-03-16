import {Component,OnInit} from '@angular/core';
import {fadeIn} from '../animation'

//Definimos el componente con el decorador
@Component({
	selector: 'contact',
	templateUrl: './contact.component.html',
	animations: [fadeIn]
})

export class ContactComponent{
	//PROPIEDADES
	public title:string;
	public email:string;

	//CONSTRUCTOR
	constructor(){
		this.title="Contacto"
	}

	ngOnInit(){
		console.log("Componente Contact cargado")
	}

	guardarEmail(){
		// console.log("Guardar Email: "+this.email)
		// UTILIZAMOS EL LOCALSTORAGE PARA CUARDAR EL EMAIL
		localStorage.setItem('email',this.email)
		// console.log(localStorage.getItem('email'))
	}
} 