import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'admin-main',
  templateUrl: './main.component.html'
})
export class MainComponent {
  title:string;

  constructor(){
    this.title='Panel de Administración'
  }
}
