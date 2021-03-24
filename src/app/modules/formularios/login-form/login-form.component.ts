import { Component, Input, OnInit } from '@angular/core';
import { UserEntity } from '../model/userEntity';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  hide = true;

  modelLogin: UserEntity = {
    username : "",
    password : ""
  }
  constructor() { }

  ngOnInit(): void {
  }

  login(){
    console.log(`Username: ${this.modelLogin.username},\nPassword: ${this.modelLogin.password}`)

  }

}
