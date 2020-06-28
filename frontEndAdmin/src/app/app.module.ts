import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DriverRegistrationComponent } from './driver-registration/driver-registration.component';
import { LotOwnerRegistrationComponent } from './lot-owner-registration/lot-owner-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DriverRegistrationComponent,
    LotOwnerRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    RouterModule.forRoot([
      {path: 'driverregistration', component: DriverRegistrationComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
