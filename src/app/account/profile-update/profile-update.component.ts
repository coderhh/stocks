import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { MustMatch } from 'src/app/helper/must-match';
import { AccountService } from 'src/app/services/account.service';
import { AlertService } from 'src/app/services/alert.service';
import { Alert } from '../model/alert';
import { Title } from '../model/title';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {
  account = this.accountService.accountValue;
  profileUpdateForm: FormGroup;
  loading = false;
  submitted = false;
  deleting = false;
  titles: Title[];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.profileUpdateForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['']
    }, {
      validators: MustMatch('password', 'confirmPassword')
    });

    this.titles = [
      {value: 'mr-0', viewValue: 'Mr'},
      {value: 'mrs-1', viewValue: 'Mrs'},
      {value: 'miss-2', viewValue: 'Miss'},
      {value: 'ms-3', viewValue: 'Ms'}
    ];
  }

  get f() { return this.profileUpdateForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.alertService.clear();

    if(this.profileUpdateForm.invalid)
    {
      return;
    }

    this.loading = true;
    this.accountService.update(this.account.id, this.profileUpdateForm.value)
        .pipe(first())
        .subscribe({
          next: () => {
            this.alertService.success('Update successful', { keepAfterRouteChange: true});
            this.router.navigate(['../profile'], { relativeTo: this.route });
          },
          error: error => {
            this.alertService.error(error);
            this.loading = false;
          }
        });
  }

  onDelete() {
    if (confirm('Are you sure?')) {
      this.deleting = true;
      this.accountService.delete(this.account.id)
          .pipe(first())
          .subscribe(() => {
            this.alertService.success('Account deleted successfully', { keepAfterRouteChange: true});
          });
    }
  }
}