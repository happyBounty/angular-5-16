import { Routes } from '@angular/router';

import { LoginComponent } from './Login/Login.component';
import { SignUpComponent } from './SignUp/SignUp.component';
import { ForgotPasswordComponent } from './ForgotPassword/ForgotPassword.component';
import { ComingSoonComponent } from './ComingSoon/ComingSoon.component';

export const SessionRoutes: Routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full',
},{
  path: '',
  children: [{
    path: 'login',
    component: LoginComponent
  }, {
    path: 'signup',
    component: SignUpComponent
  }, {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  }, {
    path: 'coming-soon',
    component: ComingSoonComponent
  }]
}];
