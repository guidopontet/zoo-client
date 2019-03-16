import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common'

// Para el two-way-data-binding (ngModel)
import { FormsModule } from '@angular/forms';

// IMPORTAR COMPONENTES
import {GuardarEmailComponent} from './components/guardarEmail/guardarEmail.component';
import {MostrarEmailComponent} from './components/mostrarEmail/mostrarEmail.component';
import {MainEmailComponent} from './components/main-email/main-email.component';


// CREAMOS EL MODULO CON EL DECORADOR
@NgModule({
  // DAMOS DE ALTA LOS COMPONENTES
  declarations: [
    GuardarEmailComponent,
    MostrarEmailComponent,
    MainEmailComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [MainEmailComponent]
})

export class ModuloEmailModule{}
