import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getAuthStatus() {
    return false;
  }

  constructor() { }
}
