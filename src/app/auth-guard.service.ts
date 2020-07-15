import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
    status : boolean;
    constructor(public auth : AuthService , public route : Router){

    }
canActivate(): boolean {
    this.status=this.auth.isAuthentiated();
    if(this.status==false){
        this.route.navigate(['login']);
    }
return true;
}
}