import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { AccountService } from './account.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private accountService: AccountService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(catchError(err => {
            if([401, 403].includes(err.status) && this.accountService.accountValue){
                this.accountService.logout();
            }
            const error = (err && err.error && err.error.message) || err.statusText;
            console.log(error);
            return throwError(error);
        }))
    }
}
