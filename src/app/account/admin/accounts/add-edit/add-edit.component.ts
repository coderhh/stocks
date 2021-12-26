import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Role, RoleInterface } from 'src/app/account/model/role';
import { Title, TitleInterface } from 'src/app/account/model/title';
import { MustMatch } from 'src/app/helper/must-match';
import { AccountService } from 'src/app/services/account.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  addEditForm: FormGroup;
  id: string;
  isAddMode: boolean;
  loading: boolean = false;
  submitted: boolean = false;
  titles: TitleInterface[];
  roles: RoleInterface[];
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    this.addEditForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      password: ['', [Validators.minLength(6), this.isAddMode ? Validators.required : Validators.nullValidator]],
      confirmPassword: ['']
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
    this.titles = [
      {value: 'Mr', viewValue: Title.Mr},
      {value: 'Mrs', viewValue: Title.Mrs},
      {value: 'Miss', viewValue: Title.Miss},
      {value: 'Miss', viewValue: Title.Ms}
    ];

    this.roles = [
      { value: 'User', viewValue: Role.User },
      { value: 'Admin', viewValue: Role.Admin}
    ];

    if (!this.isAddMode) {
      this.accountService.getById(this.id)
        .pipe(first())
        .subscribe(x => this.addEditForm.patchValue(x));
    }
  }

  get f() { return this.addEditForm.controls; }

  onSubmit() {
    this.submitted = true;

    this.alertService.clear();

    if (this.addEditForm.invalid) {
      return;
    }

    this.loading = true;
    if (this.isAddMode) {
      this.createAccount();
    } else {
      this.updateAccount();
    }
  }
  updateAccount() {
    this.accountService.update(this.id, this.addEditForm.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('Update successful', { keepAfterRouteChange: true });
          this.router.navigate(['../../'], { relativeTo: this.route });
        },
        error: error => {
          this.alertService.error(error);
          this.loading = false;
        }
      })
  }
  createAccount() {
    this.accountService.create(this.addEditForm.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('Account created successfully', { keepAfterRouteChange: true });
          this.router.navigate(['../'], { relativeTo: this.route});
        },
        error: error => {
          this.alertService.error(error);
          this.loading = false
        }
      });
  }

}
