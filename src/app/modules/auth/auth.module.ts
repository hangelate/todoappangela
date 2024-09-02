import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterFormsComponent } from './components/register-forms/register-forms.component';



@NgModule({
  declarations: [  //TODO: las cosas que se declaran son los componentes, pipes y directivas
    LoginPageComponent, RegisterFormsComponent
  ],
  imports: [      //TODO: Las cosas que se importan son otros modulos
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
