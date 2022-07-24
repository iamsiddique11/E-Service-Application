import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { AuthGuard } from './guards/auth.guard';
import { ViewCustomerComponent } from './view-customer/view-customer.component';

import { PaymentComponent } from './payment/payment.component';
import { AddcartComponent } from './addcart/addcart.component';
import { ProductsComponent } from './products/products.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';

const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'home',component:HomeComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'contactus',component:ContactusComponent},
    {path:'home-admin',component:HomeAdminComponent},
    {path:'login-admin',component:LoginAdminComponent},
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    {path:'view-customer',component:ViewCustomerComponent},
    {path:'edit-customer/:cid',component:EditCustomerComponent},
    {path:'payment',component:PaymentComponent},
    {path:'addcart',component:AddcartComponent},
    {path:'products',component:ProductsComponent}
  ];

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
  
  export const routingComponents = [
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    LoginComponent,
    RegisterComponent,
    LoginAdminComponent,
    HomeAdminComponent,
    ViewCustomerComponent
  ];
  
    
 
    
  
    