import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {SharedModule} from './shared/shared.module';
import {MainComponent} from './components/main/main.component';
import {HeaderNavComponent} from './components/header-nav/header-nav.component';
import {RentalComponent} from './components/rental/rental.component';
import {MockComponent} from './components/mock/mock.component';
import {ProfileService} from './services/profile.service';
import {SettingsService} from './services/settings.service';
import {FormsModule} from '@angular/forms';
import {TransportComponent} from './components/transport/transport.component';
import {TransportFormComponent} from './components/transport-form/transport-form.component';
import {AddTransportFormComponent} from './components/add-transport-form/add-transport-form.component';
import {TransportFormService} from './services/transport-form.service';
import {PaginationService} from './services/pagination.service';
import { CustomSelectComponent } from './components/custom-select/custom-select.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    MainComponent,
    HeaderNavComponent,
    RentalComponent,
    MockComponent,
    TransportComponent,
    TransportFormComponent,
    AddTransportFormComponent,
    CustomSelectComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    SharedModule,
    FormsModule
  ],
  providers: [ProfileService, SettingsService, TransportFormService, PaginationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
