import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PagesGuard implements CanLoad {
  constructor(private userService: AuthService) {}

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.userService.isAuthenticated();
  }
}
