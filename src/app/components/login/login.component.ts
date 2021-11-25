import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  username: any;
  password: any;

  constructor(private service: LoginService) { }

  login() {
    this.username = this.loginForm.get('username').value;
    this.password = this.loginForm.get('password').value;
    console.log(this.username, this.password);
  }
}
