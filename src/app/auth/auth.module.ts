import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
const routes: Routes = [
  {
    path: 'login',
    pathMatch: 'full',
    component: SignInComponent
  },
  {
    path: 'signup',
    pathMatch: 'full',
    component: SignUpComponent
  }
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [SignInComponent, SignUpComponent]
})
export class AuthModule {}
