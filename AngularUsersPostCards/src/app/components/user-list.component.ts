import {Component, Input} from '@angular/core';
import {User} from './models/user';

@Component({
  selector: 'youtube-user-list',
  template: `
      <div class="row">        
            <youtube-user-card [user]="user" *ngFor="let user of users"></youtube-user-card>
      </div>                                                   
  `,
  styles: [``]
})

export class UserListComponent {
  @Input()
  users: User[] = [];

  constructor() {
  }
}
