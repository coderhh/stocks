import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AccountService } from '../../services/account.service';
import { AlertService } from '../../services/alert.service';

enum EmailStatus {
  Verifying,
  Failed
}
@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {
  EmailStatus = EmailStatus;
  emailStatus = EmailStatus.Verifying;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    const token = this.route.snapshot.queryParams['token'];
    // remove token from url to prevent http referer leakage
    this.router.navigate([], { relativeTo: this.route, replaceUrl: true});

    this.accountService.verifyEmail(token)
        .pipe(first())
        .subscribe({
          next: () => {
            this.alertService.success('Verification successful, you can now login', { keepAfterRouteChange: true});
            this.router.navigate(['../login'], { relativeTo: this.route});
          },
          error: () => {
            this.emailStatus = EmailStatus.Failed;
          }
        })
  }

}
