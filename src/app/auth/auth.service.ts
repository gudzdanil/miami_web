import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  of as observableOf,
  throwError
} from 'rxjs';
import { tap, switchMap, map, catchError } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private mockUser = {
    email: 'my@gmail.com',
    firstName: 'First',
    secondName: 'Second'
  };
  private mockToken = { token: '123' };
  private _user = new BehaviorSubject<User>(null);
  user$ = this._user.asObservable();

  private set user(user: User) {
    this._user.next(user);
  }

  private get user() {
    return this._user.getValue();
  }

  set token(token: string) {
    localStorage.setItem('user_token', token);
  }

  get token() {
    return localStorage.getItem('user_token');
  }

  constructor(private http: HttpClient) {}

  isAuthenticated(): Observable<boolean> {
    return this.getUser().pipe(
      map((user: User) => !!user),
      catchError(() => observableOf(false))
    );
  }

  logIn(userData: { email: string; password: string }): Observable<any> {
    // return this.http.post<User>('/api/login', userData).pipe(
    return observableOf(this.mockToken).pipe(
      tap(({ token }: { token: string }) => {
        this.token = token;
      }),
      switchMap(() => this.getUser())
    );
  }

  getUser(): Observable<User> {
    if (this.user) {
      return this.user$;
    }
    if (!this.token) {
      return throwError({ message: 'Unauthorized' });
    }
    // return this.http.get<User>('/api/user').pipe(
    return observableOf(this.mockUser).pipe(
      tap((user: User) => {
        this.user = user;
      })
    );
  }

  register(userData: User): Observable<any> {
    // return this.http.post<User>('/api/register', userData);
    return observableOf({
      error: false,
      message: 'Activation link has been sent to your email'
    });
  }

  logOut(): Observable<any> {
    // return this.http.put('/api/logout').pipe(
    return observableOf(null).pipe(
      tap(() => {
        this.user = null;
        this.token = null;
      })
    );
  }
}
