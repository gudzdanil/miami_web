import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AuthModule, authRoutes } from './auth/auth.module';
import { PagesGuard } from './pages.guard';

const routes: Routes = [
  ...authRoutes,
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
    HttpClientModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
    NgbModule.forRoot(),
    AuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
