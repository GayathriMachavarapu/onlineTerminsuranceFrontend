import { Component, OnInit } from '@angular/core';
import { PolicyResponse } from 'src/app/classes';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'app-customer-policies',
  templateUrl: './customer-policies.component.html',
  styleUrls: ['./customer-policies.component.css']
})
export class CustomerPoliciesComponent implements OnInit {
  policies:PolicyResponse[]=[];
  
  constructor(private policyService:PolicyService) {
    
  }
ngOnInit():void{
  this.getpolicies();
  
  
}
getpolicies(){
    this.policyService.getPoliciesList().subscribe(data=>
      {
        this.policies=data;
        console.log(data);
      })
}
save(policy:PolicyResponse){
  this.policyService.addPolicy(policy).subscribe(data=>
    {
      console.log(data);
      this.getpolicies();
    })
}

}
