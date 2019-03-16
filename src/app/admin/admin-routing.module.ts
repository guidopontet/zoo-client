// ARCHIVO DE CONFIGURACIÓN DE RUTAS

import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router'

// COMPONENTES
import { MainComponent } from './components/main/main.component'
import { AddComponent } from './components/add/add.component'
import { EditComponent } from './components/edit/edit.component'
import { ListComponent } from './components/list/list-component'


// GUARDS (Para restringir el acceso solo a los usuarios administradores)
import { AdminGuard } from '../services/admin.guard'

const adminRoutes: Routes=[
	{/*RUTA PADRE*/
		path: 'admin-panel',
		component: MainComponent,
		// GUARDS, para proteger el acceso
		canActivate: [AdminGuard],
		// RUTAS HIJAS
		children: [
			// REDIRECCION PARA EL ADMIN PANEL
			{path: '',redirectTo: 'listado',pathMatch: 'full'},
			{path: 'listado',component: ListComponent},
			{path: 'crear',component: AddComponent},
			{path: 'editar/:id',component: EditComponent}
		]
	}
]

@NgModule({
  imports: [ /*Ya que tenemos rutas hijas*/
  	RouterModule.forChild(adminRoutes)
  ],
  exports: [
  	RouterModule
  ]
})

export class AdminRoutingModule{}
