import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup ({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  register(){
    console.log('register!!')
  }
}
