import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { delay, dematerialize, materialize } from "rxjs/operators";
import { AlertService } from "./alert.service";

const accountsKey = 'stocks-accounts';
const accounts = JSON.parse(localStorage.getItem(accountsKey)) || [];
@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    constructor(private alertService: AlertService){ }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body} = req;
        const alertService = this.alertService;

        return handleRoute();

        function handleRoute() {
            switch(true){
                case url.endsWith('accounts/authenticate') && method === 'POST':
                    return authenticate();
                default:
                    return next.handle(req);
            }
        }

        function authenticate(){
            const { email, password } = body;
            const account = accounts.find(x => x.email === email && x.password === password && x.isVerified);

            if(!account) return error('Email or Password is incorrect.');

            // add refresh token to account
            account.refreshTokens.push(generateRefreshToken());
            localStorage.setItem(accountsKey, JSON.stringify(accounts));

            return ok({
                ...basicDetails(account),
                jwtToken: generateJwtToken(account)
            });
        }

        function basicDetails(account): { id: any; title: any; firstName: any; lastName: any; email: any; role: any; dateCreated: any; isVerified: any; } {
            const { id, title, firstName, lastName, email, role, dateCreated, isVerified } = account;
            return { id, title, firstName, lastName, email, role, dateCreated, isVerified };
        }

        function generateJwtToken(account) {
            // create token that expires in 15 minutes
            const tokenPayload = {
                exp: Math.round(new Date(Date.now() * 15*60*1000).getTime() /1000),
                id: account.id
            }
            return `fake-jwt-token.${btoa(JSON.stringify(tokenPayload))}`;
        }


        function generateRefreshToken() {
            const token = new Date().getTime().toString();

            //add token cookie that expires in 7 days
            const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString();
            document.cookie = `fakeRefreshToken=${token}; expires=${expires}; path=/`;

            return token;
        }

        function error(message: string) {
            return throwError({ error: { message }})
                .pipe(materialize(), delay(500), dematerialize());
        }

        function ok(body?) {
            return of(new HttpResponse( { status: 200, body}))
                .pipe(delay(500));
        }
    }
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};

