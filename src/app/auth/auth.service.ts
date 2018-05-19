import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user = new BehaviorSubject<User>(null);
  user$ = this._user.asObservable();

  private set user(user: User) {
    this._user.next(user);
  }

  constructor(private http: HttpClient) {}

  isAuthenticated(): boolean {
    return !!this._user.getValue();
  }

  logIn(userData: { email: string; password: string }): Observable<User> {
    /* return this.http.post<User>('/api/login', userData).pipe(
      tap((user: User) => {
        this.user = user;
      })
    ); */
    return of({ email: 'my@gmail.com', name: 'Test name' }).pipe(
      tap((user: User) => {
        this.user = user;
      })
    );
  }

  logOut(): Observable<any> {
    /* return this.http.put('/api/logout').pipe(
      tap(() => {
        this.user = null;
      })
    ); */
    return of(null).pipe(
      tap(() => {
        this.user = null;
      })
    );
  }
}
