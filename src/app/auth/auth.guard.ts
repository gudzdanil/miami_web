import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.isAuthenticated().pipe(
      map((auth: boolean) => !auth),
      catchError(() => observableOf(true)),
      tap((notAuth: boolean) => {
        if (!notAuth) {
          this.router.navigate(['/panel']);
        }
      })
    );
  }
}
