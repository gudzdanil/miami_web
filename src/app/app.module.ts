import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthWrapperComponent } from './auth/auth-wrapper/auth-wrapper.component';
import { AuthModule, authRoutes } from './auth/auth.module';
import { PagesGuard } from './pages.guard';
import { CustomHttpInterceptor } from './http-interceptor';
import { ModalsModule } from './modals/modals.module';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'panel',
    loadChildren: './protected/protected.module#ProtectedModule',
    canLoad: [PagesGuard]
  },
  ...authRoutes,
  {
    path: '**',
    redirectTo: '/panel'
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
    AuthModule,
    ModalsModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: CustomHttpInterceptor }
  ]
})
export class AppModule {}
