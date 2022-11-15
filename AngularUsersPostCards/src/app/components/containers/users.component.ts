import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'youtube-users',
  template: `
    <div class="container">
      <youtube-user-list [users]="this.users"></youtube-user-list>
    </div>
  `,
  styles: [``]
})

export class UsersComponent implements OnInit {
  
  users: User[] = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.fetchData();
  }
  
  fetchData() {
    this.apiService.getAllPost().subscribe(data => {
      this.users = data;
      console.log("data :- ",data);
    });
    
  }

  
}
