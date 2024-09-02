import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieModule, CookieService } from 'ngx-cookie';
// import { TestComponentComponent } from './test-component/test-component.component';
// import { Page404Component } from './page404/page404.component';
// import { HomeComponent } from './home/home.component';
// import { HomeChildOneComponent } from './home-child-one/home-child-one.component';
// import { HomeChildTwoComponent } from './home-child-two/home-child-two.component';

@NgModule({
  declarations: [
    AppComponent,
    // TestComponentComponent,
    // Page404Component,
    // HomeComponent,
    // HomeChildOneComponent,
    // HomeChildTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CookieModule.forRoot()
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
