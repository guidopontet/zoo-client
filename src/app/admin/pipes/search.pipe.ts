import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'search'
})

@Injectable()
export class SearchPipe implements PipeTransform{
	
	// Recibe un conjunto de elementos y un termino de busqueda
	transform(items:any,term:any):any{
		
		// Si no ingreso termino, devuelvo todo el conjunto
		if(term===undefined){
			return items
		}

		// Realizamos el filtro de cada elemento animal
		return items.filter((item)=>{
			return item.name.toLowerCase().includes(term.toLowerCase())
		})
	}
}
