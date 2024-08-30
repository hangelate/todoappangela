import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterFormsComponent } from './components/register-forms/register-forms.component';

const routes: Routes = [ //TODO http://localhost/auth/
  {
    path:'login',
    component:LoginPageComponent
  },
  {
    path:'register',
    component:RegisterFormsComponent
  }
]; 


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
