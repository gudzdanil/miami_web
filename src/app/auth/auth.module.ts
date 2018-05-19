import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
export const authRoutes: Routes = [
  {
    path: 'login',
    component: SignInComponent
    // canActivate: [AuthGuard]
  },
  {
    path: 'signup',
    component: SignUpComponent
    // canActivate: [AuthGuard]
  }
];
@NgModule({
  imports: [CommonModule, NgbModule],
  declarations: [SignInComponent, SignUpComponent]
})
export class AuthModule {}
