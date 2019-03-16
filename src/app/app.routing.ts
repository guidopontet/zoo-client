import {ModuleWithProviders} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

// COMPONENTES
import { TiendaComponent } from './components/tienda/tienda.component';
import { HomeComponent } from './components/home/home.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserEditComponent } from './components/user-edit/user-edit.component'
import { AnimalDetailComponent } from './components/animal-detail/animal-detail.component'

// RUTAS
const appRoutes: Routes=[
	{path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: 'animals', component: AnimalsComponent},
	{path: 'contact', component: ContactComponent},
	{path: 'keepers', component: KeepersComponent},
	{path: 'tienda', component: TiendaComponent},
	{path: 'login', component: LoginComponent},
	{path: 'registro', component: RegisterComponent},
	{path: 'mis-datos', component: UserEditComponent},
	{path: 'animal/:id', component: AnimalDetailComponent},
	// Cuando no encuentre la ruta
	{path: '**', component: HomeComponent}

]

// Exportar el modulo de rutas
export const appRoutingProviders:any[]=[];
export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes); 