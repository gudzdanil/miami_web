import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthWrapperComponent } from './auth-wrapper/auth-wrapper.component';
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
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SignInComponent, SignUpComponent, AuthWrapperComponent],
  exports: [SignInComponent, SignUpComponent, AuthWrapperComponent]
})
export class AuthModule {}
