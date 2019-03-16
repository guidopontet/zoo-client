import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { GLOBAL } from '../../../services/global'

import { AnimalService } from '../../../services/animal.service'
import { UserService } from '../../../services/user.service'
import { UploadService } from '../../../services/upload.service'
import { Animal } from '../../../models/animal'

// ANIMACION
import { fadeLateral } from '../../animation'

@Component({
  selector: 'admin-list',
  templateUrl: './list-component.html',
  providers:[
  	AnimalService
  ],
  animations: [fadeLateral]
})
export class ListComponent implements OnInit {
  public title:string;
  public numbers=[0,1,2,3,4,5];
  public animals:Animal[]
  public token
  public busqueda

  constructor(
  	private _route:ActivatedRoute,
  	private _router:Router,
  	private _animalService:AnimalService,
    private _userService:UserService
	){
    this.title='Listado'
    this.token=this._userService.getToken();
  }

  ngOnInit(){
  	console.log("Componente Listado cargado correctamente")
    this.getAnimals();
  	
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

  // BORRAR ANIMAL
  deleteAnimal(id){
    this._animalService.deleteAnimal(this.token,id).subscribe(
      response=>{
        if(!response.animal){
          alert("Error en el servidor")
        }else{
          // VOLVEMOS A LISTAR LOS ANIMALES
          this.getAnimals();
          // CIERRO MODAL (Agregando el data dissmiss se soluciona)
          // $('#exampleModal-'+id).modal('hide')
        }
      },
      error=>{
        alert("Error en el servidor")
      }
    )
  }
}
