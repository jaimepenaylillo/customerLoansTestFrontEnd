import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerRegistrationComponent } from './components/customer/customer-registration/customer-registration.component';
import { CustomerAdministrationComponent } from './components/customer/customer-administration/customer-administration.component';
import { ListCustomerComponent } from './components/lists/list-customer/list-customer.component';
import { ListLoansComponent } from './components/lists/list-loans/list-loans.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerRegistrationComponent,
    CustomerAdministrationComponent,
    ListCustomerComponent,
    ListLoansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
