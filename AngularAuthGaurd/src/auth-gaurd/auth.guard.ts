import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private canActivateStatus: boolean = false;

  constructor(private router: Router, private dataservice: DataService) {}    

  canActivate(): boolean  {

     this.dataservice.currentMessage.subscribe(message => this.canActivateStatus = message);

    if (this.canActivateStatus) {
      console.log('message: true');
      return true; 
    }
      
    else {
      console.log('message: false');
      return false;
    }    
  }

}
