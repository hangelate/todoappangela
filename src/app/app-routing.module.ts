import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { HomeChildOneComponent } from './home-child-one/home-child-one.component';
// import { HomeChildTwoComponent } from './home-child-two/home-child-two.component';
// import { TestComponentComponent } from './test-component/test-component.component';
// import { Page404Component } from './page404/page404.component';

const routes: Routes = [ 
  {
    path:'auth', //TODO: http://localhost:4200/auth
    loadChildren: () => import('@modules/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path:'task', //TODO: http://localhost:4200/task
    loadChildren: () => import('@modules/task/task.module').then((m) => m.TaskModule)
  }






  // {
  //   path:'',
  //   component: HomeComponent,
  //   children:[
  //     {
  //       path:'one',
  //       component:HomeChildOneComponent
  //     },
  //     {
  //       path:'two',
  //       component:HomeChildTwoComponent
  //     }
  //   ]
  // }




  // {
  //   path:'', //TODO http//localhost:4200/
  //   component: TestComponentComponent
  // },
  // {
  //   path:'test-route',
  //   component: TestComponentComponent
  // },
  // {
  //   path:'**', //comodin si no tienes ruta 
  //   redirectTo: '/test-route' //puede redireccionar
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
