import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignInData } from '../model/sign-in-data';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly mockUser: SignInData = new SignInData('admin@gmail.com', 'EService');
  isAuthenticated = false;

  constructor(private router: Router) { }

  authenticate(signInData: SignInData): boolean {
    if (this.checkCredentials(signInData)) {
      this.isAuthenticated = true;
      this.router.navigate(['/home-admin']);
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  private checkCredentials(signInData: SignInData): boolean {
    return this.checkLogin(signInData.getLogin()) && this.checkPassword(signInData.getPassword());
  }

  private checkLogin(login: string): boolean {
    return login === this.mockUser.getLogin();
  }

  private checkPassword(password: string): boolean {
    return password === this.mockUser.getPassword();
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}
