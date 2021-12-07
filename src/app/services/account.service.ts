import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Account } from '../account/model/account';
import { environment } from '../../environments/environment';

const baseUrl = `${environment.apiUrl}/accounts`;
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

  public get accountValue(): Account {
    return this.accountSubject.value;
  }

  login(email: string, password: string) {
     return this.http.post<any>(`${baseUrl}/authenticate`, {email, password}, { withCredentials: true})
          .pipe(map(account => {
            this.accountSubject.next(account);
            this.startRefreshTokenTimer();
            return account;
          }))
  }

  logout() {
    throw new Error("Method not implemented.");
  }

  refreshToken() {
    return this.http.post<any>(`${baseUrl}/refresh-token`, {}, { withCredentials: true})
        .pipe(map((account) => {
          this.accountSubject.next(account);
          this.startRefreshTokenTimer();
          return account;
        }));
  }
  // helper method
  private refresheTokenTimeout;

  private startRefreshTokenTimer() {
    // parse json object from base64 encoded jwt token
    const jwtToken = JSON.parse(atob(this.accountValue.jwtToken.split('.')[1]));

    // set a timeout to refresh the token a minute before it expires.
    const expires = new Date(jwtToken.exp * 1000);
    const timeout = expires.getTime() - Date.now() - (60 * 1000);
    this.refresheTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
  }

}
