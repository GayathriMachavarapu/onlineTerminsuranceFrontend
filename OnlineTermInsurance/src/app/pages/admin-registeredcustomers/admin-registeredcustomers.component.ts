import { Component, OnInit } from '@angular/core';
import { customer, customerRequest, customerResponse } from 'src/app/classes';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-admin-registeredcustomers',
  templateUrl: './admin-registeredcustomers.component.html',
  styleUrls: ['./admin-registeredcustomers.component.css']
})
export class AdminRegisteredcustomersComponent implements OnInit{
  customerList :customerRequest[]=[];
  constructor(private customerService:CustomerService){
    this.getCustomerList();

  }
  ngOnInit(): void {
   
    
  }
 
  private getCustomerList(){
    this.customerService.getCustomerList().subscribe(data=>
      {
        

        this.customerList=data;
        console.log(this.customerList);
      });
  }
  

}
