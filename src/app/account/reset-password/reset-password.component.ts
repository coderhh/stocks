import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { MustMatch } from 'src/app/helper/must-match';
import { AccountService } from 'src/app/services/account.service';
import { AlertService } from 'src/app/services/alert.service';
import { TokenStatus } from '../model/tokenstatus.enum';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  TokenStatus = TokenStatus;
  tokenStatus: TokenStatus = TokenStatus.Validating;
  token = null;
  form: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });

    const token = this.route.snapshot.queryParams['token'];

    this.router.navigate([], { relativeTo: this.route, replaceUrl: true});

    this.accountService.validateResetToken(token)
      .pipe(first())
      .subscribe({
        next: () => {
          this.token = token;
          this.tokenStatus = TokenStatus.Valid;
        },
        error: () => {
          this.tokenStatus = TokenStatus.Valid;
        }
      });
  }

  get f() { return this.form.controls;}

  onSubmit(){
    this.submitted = true;

    this.alertService.clear();

    if (this.form.invalid){
      return;
    }
    this.loading = true;

    this.accountService.resetPassword(this.token, this.f.password.value, this.f.confirmPassword.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('Password reset successful, you can login now', {keepAfterRouteChange: true});
          this.router.navigate(['../login'], { relativeTo: this.route });
        },
        error: error => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }
}
