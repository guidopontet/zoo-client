import { Injectable } from '@angular/core'
import { Http ,Response , Headers , RequestOptions} from '@angular/http'
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable'
import { GLOBAL } from './global'

@Injectable()
export class AnimalService{
	public url:string

	constructor(
		private _http:Http
	){
		this.url=GLOBAL.url;
	}

	// AÑADIR ANIMAL
	addAnimal(token,animal){
		let params=JSON.stringify(animal)

		let headers=new Headers({
			'Content-Type':'application/json',
			'Authorization':token
		})

		return this._http.post(this.url+'animal',params,{headers})
			.map(res=>res.json())
	}

	// DEVOLVER ANIMALES
	getAnimals(){
		// COMO NO LE VAMOS A PASAR UN TOKEN AL API, NO ES NECESARIO ENVIARLE LOS HEADERS

		return this._http.get(this.url+'animals')
			.map(res=>res.json());
	}

	// DEVOLVER UN ANIMAL
	getAnimal(id){
		// COMO NO LE VAMOS A PASAR UN TOKEN AL API, NO ES NECESARIO ENVIARLE LOS HEADERS

		return this._http.get(this.url+'animal/'+id)
			.map(res=>res.json());
	}

	// EDITAR UN ANIMAL
	editAnimal(token,id,animal){
		let params=JSON.stringify(animal);

		let headers=new Headers({
			'Content-Type':'application/json',
			'Authorization':token
		})

		return this._http.put(this.url+'animal/'+id,params,{headers})
			.map(res=>res.json())
	}

	// ELIMINAR UN ANIMAL
	deleteAnimal(token,id){

		// Con el método delete de HTTP, se estabecen las cabeceras de manera diferente que la tradicional
		let headers=new Headers({
			'Content-Type':'application/json',
			'Authorization':token
		})

		let options=new RequestOptions({headers});

		return this._http.delete(this.url+'animal/'+id,options)
			.map(res=>res.json()) 
	}
}