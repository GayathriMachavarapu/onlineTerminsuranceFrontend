import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './pages/layouts/basic/basic.component';
import { HomeComponent } from './pages/home/home.component';
import { CustomerLoginComponent } from './pages/customer-login/customer-login.component';
import { CustomerRegisterComponent } from './pages/customer-register/customer-register.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdmindashboardComponent } from './pages/admindashboard/admindashboard.component';
import { AdminloginComponent } from './pages/adminlogin/adminlogin.component';
import { CustomerDashboardComponent } from './pages/customer-dashboard/customer-dashboard.component';
import { CustomerProfileComponent } from './pages/customer-profile/customer-profile.component';
import { CustomerPoliciesComponent } from './pages/customer-policies/customer-policies.component';
import { CustomerPaymentsComponent } from './pages/customer-payments/customer-payments.component';
import { AdminProfileComponent } from './pages/admin-profile/admin-profile.component';
import { AdminPoliciesComponent } from './pages/admin-policies/admin-policies.component';
import { AdminPaymentsComponent } from './pages/admin-payments/admin-payments.component';

import { AdminCreatepolicyComponent } from './pages/admin-createpolicy/admin-createpolicy.component';
import { compileClassMetadata } from '@angular/compiler';
import { AdminUpdatepolicyComponent } from './pages/admin-updatepolicy/admin-updatepolicy.component';
import { AdminDeletepolicyComponent } from './pages/admin-deletepolicy/admin-deletepolicy.component';
import { AdminRegisteredcustomersComponent } from './pages/admin-registeredcustomers/admin-registeredcustomers.component';
import { BuypolicyComponent } from './pages/buypolicy/buypolicy.component';
import { CustomerMypoliciesComponent } from './pages/customer-mypolicies/customer-mypolicies.component';
import { TermValueComponent } from './pages/term-value/term-value.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'AdminLogin',
    component:AdminloginComponent
  },
  {
    path:'Home',
    component:HomeComponent
  },
  {
   path:'CustomerLogin',
   component:CustomerRegisterComponent
  },
  {
    path:'SignIn',
    component:CustomerDashboardComponent
  },
{
  path:'AboutUs',
  component:AboutusComponent

},
{
  path:'ContactUs',
  component:ContactComponent
},
{
  path:'LogOut',
  component:HomeComponent
},
{
  path:'signIn',
  component:AdmindashboardComponent
},
{
  path:'Signin',
  component:CustomerLoginComponent
},
{
path:'Profile',
component:CustomerProfileComponent
},
{
  path:'Payments',
  component:CustomerPaymentsComponent
},
{
  path:'Policies',
  component:CustomerPoliciesComponent
},
{
  path:'Admin-Profile',
  component:AdminProfileComponent
},
{
  path:'Admin-Policies',
  component:AdminPoliciesComponent
},
{
  path:'Admin-Payments',
  component:AdminPaymentsComponent
},
{
  path:'Admin-RegisteredCustomer',
  component:AdminRegisteredcustomersComponent
},
{
  path:'create-policy',
  component:AdminCreatepolicyComponent
},
{
  path:'AdminUpdatePolicy/:policyId',
  component:AdminUpdatepolicyComponent
},
{
  path:'AdminDeletePolicy',
  component:AdminDeletepolicyComponent
},
{
  path:'Customer-Policies',
  component:CustomerPoliciesComponent
},
{
  path:'Buy',
  component:CustomerMypoliciesComponent
},
{
  path:'MyPolicies',
  component:CustomerMypoliciesComponent
},
{
  path:'Term-Value',
  component:TermValueComponent
}

  // children:[
  //   {path:'Profile',
  //   component:CustomerProfileComponent
  // },
  // {
  //   path:'Policies',component:CustomerPoliciesComponent
  // },
  // {
  //   path:'Payments',component:CustomerPaymentsComponent
  // }

  ]






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
