import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { timestamp } from 'rxjs/operators';

interface Title {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  titles: Title[];

  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup ({
      title: new FormControl('', Validators.required),
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('')
    });

    this.titles = [
      {value: 'mr-0', viewValue: 'Mr'},
      {value: 'mrs-1', viewValue: 'Mrs'},
      {value: 'miss-2', viewValue: 'Miss'},
      {value: 'ms-3', viewValue: 'Ms'}
    ];
  }

  register(){
    console.log('register!!')
  }
}
