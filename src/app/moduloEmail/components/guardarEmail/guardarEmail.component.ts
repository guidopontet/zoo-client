import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'guardarEmail',
  templateUrl: './guardarEmail.component.html'
})

export class GuardarEmailComponent{
  title:string;
  email:string

  constructor(){
  	this.title='Guardar Email'
  }

  guardarEmail(){
    // console.log("Guardar Email: "+this.email)
    // UTILIZAMOS EL LOCALSTORAGE PARA CUARDAR EL EMAIL
    localStorage.setItem('mailDir',this.email)
    console.log("Email: "+this.email)
    // console.log(localStorage.getItem('email'))
  }
}
