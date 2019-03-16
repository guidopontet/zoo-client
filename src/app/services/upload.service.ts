import {Injectable} from '@angular/core';
import {GLOBAL} from './global';

@Injectable()

export class UploadService{
	public url:string

	constructor(){
		this.url=GLOBAL.url
	}

	// SUBIR ARCHIVO
	makeFileRequest(url:string,params:Array<string>,files:Array<File>,token:string,name:string){
		// Utilizamos una promesa
		return new Promise((resolve,reject)=>{
			var formData:any=new FormData();

			var xhr=new XMLHttpRequest();

			// Vamos añadiendo al form cada imagen enviada en el arreglo
			for(var i=0;i<files.length;i++){
				formData.append(name,files[i],files[i].name);
			}

			// Ahora hacemos la peticion ajax
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4){
					if(xhr.status==200){
						resolve(JSON.parse(xhr.response));
					}else{
						reject(xhr.response)
					}
				}
			}

			xhr.open('POST',url,true);
			xhr.setRequestHeader('Authorization',token);
			xhr.send(formData);
		})
	}
}