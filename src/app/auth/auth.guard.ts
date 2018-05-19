import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService: AuthService, private router: Router) {}

  canActivate(): Promise<boolean> | boolean {
    const isAuthenticated = this.userService.isAuthenticated();
    if (isAuthenticated) {
      return this.router.navigate(['/']).then(() => false);
    }
    return true;
  }
}
