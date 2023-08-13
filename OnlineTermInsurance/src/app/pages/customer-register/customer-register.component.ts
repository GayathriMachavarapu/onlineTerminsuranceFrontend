import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { json } from 'express';
import { FormControl,FormGroup } from '@angular/forms';
import { getMatFormFieldDuplicatedHintError } from '@angular/material/form-field';
import { CustomerserviceService } from 'src/app/services/customerservice.service';


@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit{
  
  

  constructor(private customerService:CustomerserviceService ){
    
  }
  ngOnInit(): void {
    
  }
  public customer={
    userName: '',
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    dob:'',
    contactNumber:'',
    gender:'',
    address:'',
    income:'',
    employment:'',

  }
  
  



  formSubmit(){
    console.log(this.customer);
    if(this.customer.userName=='' || this.customer.userName=='null'){
      alert('user name is required');
    if(this.customer.firstName=='' || this.customer.firstName=="null"){
      alert('userName is required');

    }
    }

    this.customerService.addCustomer(this.customer).subscribe({
      next:(data)=>{
        console.log(data);
        alert('successs');
      },
      error:(error)=>{
              console.log(error);
      alert('something went wrong');
      }
    });
    
    

    
   
  }

  

  


}
