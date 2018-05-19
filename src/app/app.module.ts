import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { PagesGuard } from './pages.guard';

const routes: Routes = [
  {
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
    RouterModule.forRoot(routes),
    AuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
