import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class GetTokenService {

  constructor(private httpClient:HttpClient) { }

 
  public generateToken(request: any) {
    let headers={ headers: new HttpHeaders({'Content-Type': 'application/json'})};
    let url = 'http://localhost:8080/getJWTToken';
    let responseType = {responseType: 'text' as 'json'};
    return this.httpClient.post(url,request,responseType);
  }

  public fetchHome(token: string) {   
    let header={ headers: new HttpHeaders({'Authorization': token})};
    let url = 'http://localhost:8080/home';
    return this.httpClient.get(url,header);

  }

}
