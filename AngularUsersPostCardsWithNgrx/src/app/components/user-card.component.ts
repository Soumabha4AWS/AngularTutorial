import {Component, Input} from '@angular/core';

import {Router} from '@angular/router';
import { User } from './models/user';

@Component({
  selector: 'youtube-user-card',
  template: `
    <div class="column">
      <div class="card" style="width: 18rem;">          
          <div class="card-body">
            <h5 class="card-title">{{this.user.name}}</h5>
            <p class="card-text">{{this.user.email}}</p>
            <a href="#" class="btn btn-primary">Get Details</a>
          </div>
        </div> 
    </div>      
  `,
  styles: [``]
})

export class UserCardComponent {
  @Input() user: User = {
    id: 0,
    name: '',
    email: '',
    address: { 
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: ''
      } 
    },
    username: ''
  };

  constructor() {
  }

  

}
