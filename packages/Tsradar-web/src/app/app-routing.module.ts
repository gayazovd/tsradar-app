import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth/components/auth/auth.component';
import {RegistrationComponent} from './auth/components/registration/registration.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {LoginComponent} from './auth/components/login/login.component';
import {MainComponent} from './components/main/main.component';
import {MockComponent} from './components/mock/mock.component';
import {RentalComponent} from './components/rental/rental.component';
import {AuthGuard} from './guards/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login',
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: {animation: 'isRight'}
      },
      {
        path: 'registration',
        component: RegistrationComponent,
        data: {animation: 'isLeft'}
      }
    ]
  },
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'rentals',
        component: RentalComponent
      },
      {
        path: 'planer',
        component: MockComponent
      },
      {
        path: 'dashboard',
        component: MockComponent
      },
      {
        path: 'myaccount',
        component: MockComponent
      },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
