import {Component} from '@angular/core';

@Component({
  selector: 'youtube-header',
  template: `   
    <nav class="navbar navbar-light bg-light">
      <form class="form-inline">
        <button class="btn btn-outline-success" type="button" routerLink="" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="selected">Users</button>
        <button class="btn btn-sm btn-outline-secondary" type="button" routerLink="/post" routerLinkActive="selected">Posts</button>
      </form>
    </nav>    
  `,
  styles: [`
    .selected {
      background: #3c763d;
    }
  `]
})

export class HeaderComponent {

  constructor() {
  }
}
