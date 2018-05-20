import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthWrapperComponent } from './auth/auth-wrapper/auth-wrapper.component';
import { AuthModule, authRoutes } from './auth/auth.module';
import { PagesGuard } from './pages.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthWrapperComponent,
    children: [
      ...authRoutes,
      {
        path: '**',
        redirectTo: '/login'
      }
    ]
  },
  {
    path: 'panel',
    loadChildren: './protected/protected.module#ProtectedModule',
    canLoad: [PagesGuard]
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
    AuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
