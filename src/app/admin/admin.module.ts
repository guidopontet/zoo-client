// MODULOS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

// PARA ANIMACIONES
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

// RUTAS
import { AdminRoutingModule } from './admin-routing.module'

// COMPONENTES
import { MainComponent } from './components/main/main.component'
import { AddComponent } from './components/add/add.component'
import { EditComponent } from './components/edit/edit.component'
import { ListComponent } from './components/list/list-component'

// SERVICIOS
import { UserService } from '../services/user.service'

// GUARDS
import { AdminGuard } from '../services/admin.guard'

// PIPES
import { SearchPipe } from './pipes/search.pipe'

@NgModule({
	declarations: [
		MainComponent,
		AddComponent,
		EditComponent,
		ListComponent,
    SearchPipe
	],
  	imports: [
  		CommonModule,
  		FormsModule,
  		HttpModule,
  		AdminRoutingModule,
      BrowserAnimationsModule
  	],
  	exports: [
  		MainComponent,
		AddComponent,
		EditComponent,
		ListComponent
  	],
  	providers:[
  		AdminGuard,
  		UserService
	]
})

export class AdminModule {}