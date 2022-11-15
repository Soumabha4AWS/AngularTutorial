import {Component, Input, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import {User} from './models/user';
import { UserClass } from './models/userClass';
import { UserCardState } from './models/userState';

@Component({
  selector: 'youtube-user-list',
  template: `
      <button type="button" class="btn btn-warning btn-sm col-xs-2 margin-left" (click)="showMockData()">Show Mock Data</button> 
      <button type="button" class="btn btn-dark btn-sm col-xs-2 margin-left" (click)="clearData()">Clear Data</button>  
      <button type="button" class="btn btn-info btn-sm col-xs-2 margin-left" (click)="showRealData()">Show Real Data</button>
      <div class="row">            
            <youtube-user-card [user]="user" *ngFor="let user of users$ | async "></youtube-user-card>
      </div>                                                   
  `,
  styles: [`
      .margin-left{
        margin-left: 60px !important;
    }
  `]
})

export class UserListComponent implements OnInit {
  
  @Input()
  users: User[] = [];
  userClasses: UserClass[] = [];
  users$: any = null;

  
  constructor(private store: Store<UserCardState>) {
   
  }


  ngOnInit(): void {    
      
    }

    showMockData(): void {
      this.users$ = this.store.select('mockUserCards');
    }
  

    showRealData(): void {
      this.users$ = this.store.select('realUserCards');
    }

    clearData(): void {
      this.users$ = '';
    }

}   




