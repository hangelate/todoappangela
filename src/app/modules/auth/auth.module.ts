import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [  //TODO: las cosas que se declaran son los componentes, pipes y directivas
    LoginPageComponent
  ],
  imports: [      //TODO: Las cosas que se importan son otros modulos
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
