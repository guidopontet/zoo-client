import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'main-email',
  templateUrl: './main-email.component.html'
})

export class MainEmailComponent implements OnInit{
  title:string;

  constructor(){
  	this.title='Modulo de Email'
  }

  ngOnInit(){
    console.log("Component Main-Email cargado")
  }
 
}