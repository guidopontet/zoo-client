import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'mostrarEmail',
  templateUrl: './mostrarEmail.component.html'
})

export class MostrarEmailComponent implements OnInit,DoCheck {
  title:string;
  email:string

  constructor(){
  	this.title='Mostrar Email'
  }

  ngOnInit(){
  	this.email=localStorage.getItem('mailDir')
  }

  // Utilizamos el doCheck para actualizar el cambio de email
  ngDoCheck(){
  	this.email=localStorage.getItem('mailDir')
  }

  eliminarEmail(){
  	localStorage.removeItem('mailDir');
  	this.email=null
  }

}
