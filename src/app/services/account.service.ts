import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Account } from '../account/model/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private accountSubject : BehaviorSubject<Account>;
  private account: Observable<Account>;

  constructor(private http: HttpClient) {
    this.accountSubject = new BehaviorSubject<Account>(null);
    this.account = this.accountSubject.asObservable();
  }

  login(email: string, password: string) {
     return this.http.post<any>('${baseUrl}/authenticate', {email, password}, { withCredentials: true})
          .pipe(map(account => {
            this.accountSubject.next(account);
            this.startRefreshTokenTimer();
            return account;
          }))
  }
  startRefreshTokenTimer() {
    throw new Error('Method not implemented.');
  }

}
