import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { Account } from '../account/model/account';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

const baseUrl = `${environment.apiUrl}/accounts`;
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private accountSubject : BehaviorSubject<Account>;
  private account: Observable<Account>;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
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
    this.http.post<any>(`${baseUrl}/revoke-token`, {}, { withCredentials: true}).subscribe();
    this.stopRefreshTokenTimer();
    this.accountSubject.next(null);
    this.router.navigate(['/account/login']);
  }

  refreshToken() {
    return this.http.post<any>(`${baseUrl}/refresh-token`, {}, { withCredentials: true})
        .pipe(map((account) => {
          this.accountSubject.next(account);
          this.startRefreshTokenTimer();
          return account;
        }));
  }

  register(account: Account) {
    return this.http.post(`${baseUrl}/register`, account);
  }
  verifyEmail(token: string){
    return this.http.post(`${baseUrl}/verify-email`, { token });
  }

  forgotPassword(email: string){
    return this.http.post(`${baseUrl}/forgot-password`, { email });
  }

  validateResetToken(token: string){
    return this.http.post(`${baseUrl}/validate-reset-token`, { token });
  }

  resetPassword(token: string, password: string, confirmPassword: string){
    return this.http.post(`${baseUrl}/reset-password`, { token, password, confirmPassword });
  }

  getAll(){
    return this.http.get<Account[]>(baseUrl);
  }

  getById(id: string){
    return this.http.get<Account>(`${baseUrl}/${id}`);
  }

  create(params) {
    return this.http.post(baseUrl, params);
  }

  update(id: string, params: object){
    return this.http.put(`${baseUrl}/${id}`, params)
        .pipe(map((account:any) => {
          if(account.id === this.accountValue.id){
            account = { ...this.accountValue, ...account };
            this.accountSubject.next(account);
          }
          return account;
        }));
  }

  delete(id:string){
    return this.http.delete(`${baseUrl}/${id}`)
        .pipe(finalize(() => {
          if(id === this.accountValue.id)
            this.logout();
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

  private stopRefreshTokenTimer() {
    clearTimeout(this.refresheTokenTimeout);
  }
}
