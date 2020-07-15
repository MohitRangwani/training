import { Injectable } from '@angular/core';
import { HttpHeaders, HttpResponse, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService{
    isAuthentiated() : boolean{
        return true;
    }
    constructor(public http : HttpClient){}
    headers = new HttpHeaders({
        'Authentication' : 'Basic' + btoa ("IAM:1234"),
        'Content-Type' : 'application/json'
    })
    params;
    login(username : String , password : String) : Observable<HttpResponse<Object>>{
        this.params={
            "username" : username,
            "password": password,
            "grant_type"  :"password"
        }
        return this.http.post<any>('https://www.techskillsit.com/demo/oauth/custom/token', {},
        {
            params : this.params,
            headers : this.headers,
            withCredentials :true
        }
        )
    };
}