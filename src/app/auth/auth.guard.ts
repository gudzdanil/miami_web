import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable, of as observableOf } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.isAuthenticated().pipe(
      map((auth: boolean) => !auth),
      catchError(() => observableOf(true)),
      tap((auth: boolean) => {
        if (auth) {
          this.router.navigate(['/panel']);
        }
      })
    );
  }
}
