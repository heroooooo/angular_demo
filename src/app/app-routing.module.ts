import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './interceptor/auth-guard.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: 'authenticate', loadChildren: () => import('./authenticator/authenticator.module').then(m => m.AuthenticatorModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
