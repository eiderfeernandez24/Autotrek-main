import { Routes } from '@angular/router';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ModelosComponent } from './components/modelos/modelos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta para la página principal
  { path: 'servicios', component: ServiciosComponent },
  { path: 'modelos', component: ModelosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', component: HomeComponent }, // Ruta para la página principal
];