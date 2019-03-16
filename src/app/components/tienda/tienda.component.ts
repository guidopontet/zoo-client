import {Component,OnInit} from '@angular/core';
import {fadeIn} from '../animation'
// Importamos las librerias o  modulos de Angular para animaciones
import {trigger,state,style,transition,animate} from '@angular/core'; 

//Definimos el componente con el decorador
@Component({
	selector: 'tienda',
	templateUrl: './tienda.component.html',
	animations: [
		trigger('marcar',[
				state('inactive',style({
					border: '5px solid #ccc',
					background: 'blue'
				})),
				state('active',style({
					border: '5px solid yellow',
					background: 'red',
					borderRadius: '50px'
				})), 
				transition('inactive => active',animate('3s linear')),
				transition('active => inactive',animate('3s linear'))
			]),
		[fadeIn]
	]
})

export class TiendaComponent implements OnInit{
	//PROPIEDADES
	public titulo;
	public status;

	//CONSTRUCTOR
	constructor(){
		this.titulo="Esta es mi tienda!"
		this.status='inactive'
	}

	cambiarEstado(){
		if(this.status=='inactive'){
			this.status='active'
		}else{
			this.status='inactive'
		}
	}

	ngOnInit(){
		console.log("Componente Tienda cargado")
		$('#texto').hide();
		$('#boton').click(function(){
			$('#texto').slideToggle();
		})

		// Utilizamos las librerias para que no sobresalga el texto y ponga puntos suspensivos
		// $('#textoSobresalido').dotdotdot();
	}
}