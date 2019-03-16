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
  selector: 'admin-edit',
  templateUrl: './edit.component.html',
  providers:[
  	UserService,
  	AnimalService,
  	UploadService
  ],
  animations:[fadeLateral]
})
export class EditComponent implements OnInit {
  public title:string;
  public animal:Animal;
  public identity;
  public token;
  public url:string;
  public status:string;

  constructor(
  	private _route:ActivatedRoute,
  	private _router:Router,
  	private _userService:UserService,
  	private _animalService:AnimalService,
  	private _uploadService:UploadService
	){
    this.title='Editar'
    this.identity=this._userService.getIdentity();
    this.animal=new Animal('','','','','','')
    this.token=this._userService.getToken();
    this.url=GLOBAL.url;
  }

  ngOnInit(){
  	console.log("Componente EditComponent ha sido cargado exitosamente")
  	this.getAnimal();
  }

  // OBTENER ANIMAL
  getAnimal(){
    // Obtenemos el ID del animal de la URL
    this._route.params.forEach((params:Params)=>{
      let id=params['id']

      this._animalService.getAnimal(id).subscribe(
        response=>{
          if(!response.animal){
            this._router.navigate(['/'])
          }else{
            this.animal=response.animal
          }
        },
        error=>{
          console.log(<any>error)
          this._router.navigate(['/'])
        }
      )
    })
  }

  onSubmit(){
    this._animalService.editAnimal(this.token,this.animal._id,this.animal).subscribe(
      response=>{
        if(!response.animalUpdate){
          this.status='error'
        }else{
          this.status='success'
          this.animal=response.animalUpdate

          // SUBIMOS LA IMAGEN
          // Si no seleccionó ninguna imagen
          if(!this.filesToUpload){
            this._router.navigate(['/animal',this.animal._id])
          }else{
            this._uploadService.makeFileRequest(this.url+'upload-image-animal/'+this.animal._id,[],this.filesToUpload,this.token,'image')
            .then((result:any)=>{
              this.animal.image=result.animal.image
              this._router.navigate(['/animal',this.animal._id])
            })
          }

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
