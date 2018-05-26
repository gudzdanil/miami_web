import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PagesGuard implements CanLoad {
  constructor(private userService: AuthService, private router: Router) {}

  canLoad(route: Route): Observable<boolean> | boolean {
    // return true;
    return this.userService.isAuthenticated().pipe(
      tap((authenticated: boolean) => {
        if (!authenticated) {
          this.router.navigate(['login']);
        }
        console.log('canLoad', authenticated);
      })
    );
  }
}
