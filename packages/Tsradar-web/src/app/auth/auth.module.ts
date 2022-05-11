import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './components/auth/auth.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {AuthService} from './services/auth.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    AuthComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule {
}
