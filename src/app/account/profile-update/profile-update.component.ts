import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { MustMatch } from 'src/app/helper/must-match';
import { AccountService } from 'src/app/services/account.service';
import { AlertService } from 'src/app/services/alert.service';
import { Title, TitleInterface } from '../model/title';

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
  titles: TitleInterface[];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.profileUpdateForm = this.formBuilder.group({
      title: [this.account.title, Validators.required],
      firstName: [this.account.firstName, Validators.required],
      lastName: [this.account.lastName, Validators.required],
      email: [this.account.email, [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(6)]],
      confirmPassword: ['']
    }, {
      validators: MustMatch('password', 'confirmPassword')
    });

     this.titles = [
      {value: 'Mr', viewValue: Title.Mr},
      {value: 'Mrs', viewValue: Title.Mrs},
      {value: 'Miss', viewValue: Title.Miss},
      {value: 'Ms', viewValue: Title.Ms}
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
