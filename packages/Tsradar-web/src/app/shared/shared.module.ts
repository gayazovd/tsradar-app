import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '../http/http.module';
import {AppRoutingModule} from '../app-routing.module';
import {ShowPasswordComponent} from './components/show-password/show-password.component';
import {LogoComponent} from './components/logo/logo.component';
import {DropDownComponent} from './components/drop-down/drop-down.component';
import {PopupComponent} from './components/popup/popup.component';


@NgModule({
  declarations: [
    ShowPasswordComponent,
    LogoComponent,
    DropDownComponent,
    PopupComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  exports: [
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    ShowPasswordComponent,
    LogoComponent,
    DropDownComponent,
    PopupComponent
  ]
})
export class SharedModule {
}
