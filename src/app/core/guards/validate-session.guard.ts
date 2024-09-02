import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidateSessionGuard implements CanActivate {
  
  // private cookie:string | null = "" //TODO: Aqui consultaremos la cookie al navegador
  // private cookie:string | null = null
  private cookie:string | null = '111'

  constructor(private router:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true; //TODO: (true | false)
    return this.checkCookie();
  }

  private checkCookie():boolean{  //TODO: true | false
    console.log('holaaaa',this.cookie)
    // return (this.cookie !== null);

    if(this.cookie !== null){
      return true;
    }else{
      this.router.navigate(['/','auth','login'])
      return false;
    }
  }

  
}
