import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BasicComponent } from './pages/layouts/basic/basic.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CustomerLoginComponent } from './pages/customer-login/customer-login.component';
import { CustomerRegisterComponent } from './pages/customer-register/customer-register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {HttpClientModule} from '@angular/common/http';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdmindashboardComponent } from './pages/admindashboard/admindashboard.component';
import { AdminloginComponent } from './pages/adminlogin/adminlogin.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { CustomerDashboardComponent } from './pages/customer-dashboard/customer-dashboard.component';

import { CustomerPoliciesComponent } from './pages/customer-policies/customer-policies.component';
import { CustomerPaymentsComponent } from './pages/customer-payments/customer-payments.component';
import { CustomerProfileComponent } from './pages/customer-profile/customer-profile.component';
import { SidenavComponent } from './pages/sidenav/sidenav.component';
import { AdminProfileComponent } from './pages/admin-profile/admin-profile.component';
import { AdminPoliciesComponent } from './pages/admin-policies/admin-policies.component';

import { AdminPaymentsComponent } from './pages/admin-payments/admin-payments.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { AdminCreatepolicyComponent } from './pages/admin-createpolicy/admin-createpolicy.component';
import { AdminUpdatepolicyComponent } from './pages/admin-updatepolicy/admin-updatepolicy.component';
import { AdminDeletepolicyComponent } from './pages/admin-deletepolicy/admin-deletepolicy.component';
import { AdminRegisteredcustomersComponent } from './pages/admin-registeredcustomers/admin-registeredcustomers.component';
import { BuypolicyComponent } from './pages/buypolicy/buypolicy.component';
import { CustomerMypoliciesComponent } from './pages/customer-mypolicies/customer-mypolicies.component';
import { TermValueComponent } from './pages/term-value/term-value.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BasicComponent,
    CustomerLoginComponent,
    CustomerRegisterComponent,
    AboutusComponent,
    ContactComponent,
    AdmindashboardComponent,
    AdminloginComponent,
    SidebarComponent,
    CustomerDashboardComponent,
  
    CustomerPoliciesComponent,
    CustomerPaymentsComponent,
    CustomerProfileComponent,
    SidenavComponent,
    AdminProfileComponent,
    AdminPoliciesComponent,
    AdminPaymentsComponent,
    AdminCreatepolicyComponent,
    AdminUpdatepolicyComponent,
    AdminDeletepolicyComponent,
    AdminRegisteredcustomersComponent,
    BuypolicyComponent,
    CustomerMypoliciesComponent,
    TermValueComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    HttpClientModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatNativeDateModule,
    MatSnackBarModule
   
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
