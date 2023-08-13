import { Component, OnInit } from '@angular/core';
import { PolicyDto, PolicyResponse, customerResponse } from 'src/app/classes';
import { CustomerService } from 'src/app/services/customer.service';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'app-customer-mypolicies',
  templateUrl: './customer-mypolicies.component.html',
  styleUrls: ['./customer-mypolicies.component.css']
})
export class CustomerMypoliciesComponent implements OnInit {
  customers:customerResponse[]=[];
  policies:PolicyDto =new PolicyDto();
  constructor(private customerService:CustomerService)
  {
    
  }
  ngOnInit():void{
    this.get();
    
  }
  get()
  {
    this.customerService.getPoliciesList(this.policies.customerId).subscribe(data=>
      {
        this.customers=data;
      })
  }
 
  




}
