import {Component,OnInit} from '@angular/core';
import {fadeIn} from '../animation'

import { GLOBAL } from '../../services/global'
import { AnimalService } from '../../services/animal.service'
import { Animal } from '../../models/animal'

//Definimos el componente con el decorador
@Component({
	selector: 'animals',
	templateUrl: './animals.component.html',
	providers:[
		AnimalService
	],
	animations: [fadeIn]
	
})

export class AnimalsComponent implements OnInit{
	//PROPIEDADES
	public title:  string
	public animals: Animal[]
	public url

	//CONSTRUCTOR
	constructor(
		private _animalService: AnimalService
	){
		this.title="Animales" 
		this.url=GLOBAL.url
	}

	ngOnInit(){
		console.log("Componente Animals cargado")
		this.getAnimals()
	}

	// Obtener animales
  	getAnimals(){
  		this._animalService.getAnimals().subscribe(
    		response=>{
 	       		if(!response.animals){

    	    	}else{
       				this.animals=response.animals
        		}
      		},
  			error=>{
        		console.log(<any>error)
      		})
  	}

} 