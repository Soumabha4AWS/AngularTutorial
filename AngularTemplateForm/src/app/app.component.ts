import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Template Driven Form';
  message: string = '';

  constructor() { }

  logUserCredentials(formValue: {username: '', password: ''}) {
    if (!formValue.username ) this.message = 'Enter User Name';
    if (!formValue.password ) this.message = 'Enter Password';
    if (!formValue.username &&  !formValue.password) this.message = 'Enter User Name and Password';
    if (formValue.username &&  formValue.password) this.message = 'Welcome User';
      console.log('formValue is',formValue.username);
  }

  logUserName(username: string) {
    console.log('username is',username);
  }

  logPassword(password: string) {
    console.log('password is',password);
  }

}
