import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AccountService } from 'src/app/services/account.service';
import { AlertService } from 'src/app/services/alert.service';
import { MustMatch } from '../../helper/must-match';
import { Title, TitleInterface } from 'src/app/account/model/title';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  titles: TitleInterface[];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });

    this.titles = [
      {value: 'mr-0', viewValue: Title.Mr},
      {value: 'mrs-1', viewValue: Title.Mrs},
      {value: 'miss-2', viewValue: Title.Miss},
      {value: 'ms-3', viewValue: Title.Ms}
    ];

  }

  get f() { return this.registerForm.controls; }

  onSubmit(){
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    //console.log(this.registerForm.value);
    this.accountService.register(this.registerForm.value)
        .pipe(first())
        .subscribe({
           next: () => {
             this.alertService.success('Registration successful, please check your email for verification instructions', { keepAfterRouteChange: true});
             this.router.navigate(['../login'], { relativeTo: this.route});
           },
           error: error => {
             this.alertService.error(error);
             this.loading = false;
           }
        });
  }
}
