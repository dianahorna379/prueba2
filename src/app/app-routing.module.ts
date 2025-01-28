import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Prueba2Component } from './pages/prueba2/prueba2.component';

const routes: Routes = [
  {
  path: 'inicio',
  component:Prueba2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
