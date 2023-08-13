import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PolicyResponse } from 'src/app/classes';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'app-admin-createpolicy',
  templateUrl: './admin-createpolicy.component.html',
  styleUrls: ['./admin-createpolicy.component.css']
})
export class AdminCreatepolicyComponent implements OnInit{
  policy:PolicyResponse=new PolicyResponse();

  constructor(private policyService:PolicyService,private router:Router){

  }
  ngOnInit():void{

  }
addPolicy(){
    this.policyService.addPolicy(this.policy).subscribe(data=>
      {
        console.log(data);
        this.goToPolicyList();
      },
      error => console.log(error));  
  }
  goToPolicyList(){
    this.router.navigate(['/Admin-Policies']);

  }
 onSubmit(){
  console.log(this.policy);
  this.addPolicy();
 }
}
