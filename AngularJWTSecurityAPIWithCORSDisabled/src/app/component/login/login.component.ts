import { Component, OnInit } from '@angular/core';
import { GetTokenService } from 'src/app/service/get-token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private getTokenService: GetTokenService) {}

  ngOnInit(): void {
    console.log('Crendentials are ',this.username, ' and ', this.password);
  }

  onSubmitFunc() {
    console.log('Crendentials are ',this.username, ' and ', this.password);
    let loginRequest: string = `
      {
        "username": "${this.username}",
        "password": "${this.password}"
    }`;
    console.log('request send is ',loginRequest)
    let loginResponse1: any = this.getTokenService.generateToken(loginRequest);
    loginResponse1.subscribe((data1: string) => {
      console.log("Token", data1);
      localStorage.setItem("Token", data1);
      let token = 'Bearer '+localStorage.getItem("Token");
      let loginResponse2 = this.getTokenService.fetchHome(token);
      loginResponse2.subscribe(data2 => console.log('final Response is',data2),err => console.log('Error is ',err));
    });    

  }

}
