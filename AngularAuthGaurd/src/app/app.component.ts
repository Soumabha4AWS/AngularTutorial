import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Auth Gaurd';

  constructor(private router: Router, private dataService: DataService) { }

  loggedIn(value: boolean) {
    this.dataService.sendMessage(value);
  }

  loggedOut(value: boolean) {
    this.router.navigate(['']);
  }

  

}
