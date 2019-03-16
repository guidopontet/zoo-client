import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http'
import { NgModule } from '@angular/core';
import {routing, appRoutingProviders} from './app.routing'
// PARA ANIMACIONES
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
// Para el two-way-data-binding (ngModel)
import { FormsModule } from '@angular/forms';

// IMPORTAR MODULOS
import { ModuloEmailModule } from './moduloEmail/moduloEmail.module'
import { AdminModule } from './admin/admin.module'

//COMPONENTES
import { AppComponent } from './app.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { HomeComponent } from './components/home/home.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { AnimalDetailComponent } from './components/animal-detail/animal-detail.component'

import { HashLocationStrategy, LocationStrategy } from "@angular/common";


@NgModule({
  // DAMOS DE ALTA LOS COMPONENTES
  declarations: [
    AppComponent,
    TiendaComponent,
    HomeComponent,
    AnimalsComponent,
    ContactComponent,
    KeepersComponent,
    LoginComponent,
    RegisterComponent,
    UserEditComponent,
    AnimalDetailComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    BrowserAnimationsModule,
    ModuloEmailModule,
    AdminModule
  ],
  providers: [
      appRoutingProviders,
      {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
