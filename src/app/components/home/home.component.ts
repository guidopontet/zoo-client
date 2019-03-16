import {Component,OnInit} from '@angular/core';
// Importamos la animacion que creamos
import {fadeIn} from '../animation'

//Definimos el componente con el decorador
@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	animations: [fadeIn]
})

export class HomeComponent{
	//PROPIEDADES
	public title;

	//CONSTRUCTOR
	constructor(){
		this.title="Bienvenido a Zoo" 
	}

	ngOnInit(){
		console.log("Componente Home cargado correctamente")
	}
} 