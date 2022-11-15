import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../models/user';
import { ApiService } from '../services/api.service';
import { getUserCard } from '../store/actions/user-card.actions';

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

  constructor(private apiService: ApiService, private store: Store) {
  }

  ngOnInit() {
    this.fetchData();
  }
  
  fetchData() {
    this.store.dispatch(getUserCard());
    
    this.apiService.getAllPost().subscribe(data => {
      this.users = data;
      console.log("data :- ",data);
    });
    
  }

  
}
