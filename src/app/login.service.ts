import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  logged = false;

  constructor() { }

  login(): void {
    this.logged = true;
  }

  logout(): void {
    this.logged = false;
  }
}
