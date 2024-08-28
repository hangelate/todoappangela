import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponentComponent } from './test-component/test-component.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [ 
  {
    path:'', //TODO http//localhost:4200/
    component: TestComponentComponent
  },
  {
    path:'test-route',
    component: TestComponentComponent
  },
  {
    path:'**', //comodin si no tienes ruta 
    redirectTo: '/test-route' //puede redireccionar
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
