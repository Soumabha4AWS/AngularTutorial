import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  title: string = 'Reactive Form';
  message: string = '';
  usernameTracked: string = '';
  passwordTracked: string = '';


  loginForm: FormGroup = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  });

  constructor() { }


  ngOnInit(): void {
    this.loginForm.get('username')?.valueChanges.subscribe(data => this.usernameTracked = data);
    this.loginForm.get('password')?.valueChanges.subscribe(data => this.passwordTracked = data);
  }

  logUserCredentials() {
    if (!this.usernameTracked ) this.message = 'Enter User Name';
    if (!this.passwordTracked ) this.message = 'Enter Password';
    if (!this.usernameTracked &&  !this.passwordTracked) this.message = 'Enter User Name and Password';
    if (this.usernameTracked &&  this.passwordTracked) this.message = 'Welcome User';
    console.log('formValue is',this.loginForm.value);
    }

  logUserName() {
    console.log('UserName is',this.usernameTracked);
    }

    logPassword() {
      console.log('Password is',this.passwordTracked);
    }


    get usernameGetter() {
      return this.loginForm.get('username');
    }

    get passwordGetter() {
      return this.loginForm.get('password');
    }

}
