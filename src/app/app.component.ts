import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from './services/user.service'
import { Router , ActivatedRoute , Params} from '@angular/router';
import { GLOBAL } from './services/global'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[
  	UserService
  ]
})
export class AppComponent implements OnInit{
  public title:string;
  public identity
  public url:string

  constructor(
	private _userService:UserService,
  private _router:Router
  	){
  	this.title='Zoológico'
    this.url=GLOBAL.url
  }

  ngOnInit(){
  	this.identity=this._userService.getIdentity()
  	// console.log(this.identity)
  }

  // Para solucionar el Login, y se regenere la vista, ante cualquier cambio, verificamos el localStorage
  ngDoCheck(){
    this.identity=this._userService.getIdentity()
  }

  // CERRAR SESION
  logOut(){
    // Borramos el contenido del localStorage
    localStorage.clear();
    this.identity=null;
    this._router.navigate(['/login'])
  }

}
