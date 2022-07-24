import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router , RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { CustomerServiceService } from './customer-service.service';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductsComponent } from './products/products.component';
import { AddcartComponent } from './addcart/addcart.component';
import { PaymentComponent } from './payment/payment.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginAdminComponent,
    HomeAdminComponent,
    ViewCustomerComponent,
    NavbarComponent,
    ProfileComponent,
    ProductsComponent,
    AddcartComponent,
    PaymentComponent,
    EditCustomerComponent,
    
     ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [CustomerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
