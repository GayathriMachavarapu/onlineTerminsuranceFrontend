import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PolicyResponse } from 'src/app/classes';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'app-admin-policies',
  templateUrl: './admin-policies.component.html',
  styleUrls: ['./admin-policies.component.css']
})
export class AdminPoliciesComponent implements OnInit{
  policies: PolicyResponse[] = [];
  
  constructor(private policyService:PolicyService,private router:Router){

  }
  ngOnInit():void{

  this.getPolicies();
}

private getPolicies(){
  this.policyService.getPoliciesList().subscribe(data=>{
    this.policies=data;
  });
}
updatePolicy(policyId:number){
  this.router.navigate(['AdminUpdatePolicy',policyId]);
}

deletePolicy(policyId:number){
  this.policyService.deletePolicy(policyId).subscribe(data=>{
    console.log(data);
    this.getPolicies();
  });


}



  

}
