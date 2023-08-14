import { Component, OnInit, numberAttribute } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PolicyDto, PolicyResponse } from 'src/app/classes';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'app-customer-policies',
  templateUrl: './customer-policies.component.html',
  styleUrls: ['./customer-policies.component.css']
})
export class CustomerPoliciesComponent implements OnInit {
  policies:PolicyResponse[]=[];

  policyId!: number;
  
  policy:PolicyResponse=new PolicyResponse();
  
  constructor(private policyService:PolicyService,private router: Router,private route: ActivatedRoute) {
    
  }
ngOnInit():void{
  this.getpolicies();
  this.policyId = this.route.snapshot.params['policyId'];
  this.policyService.findById(this.policyId).subscribe(data => {

    this.policy = data;

  }, error => console.log(error));

  
  
  
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

getPolicyById(policyId:number){
  this.policyService.findById(policyId).subscribe(data=>{
    this.policy=data;
  })

}

onSubmit(){

  this.policyService.addPoliciesTocustomer(this.policy).subscribe( data =>{

    this.goToPolicyList();
    

  },

 error => console.log(error));

}



goToPolicyList(){


  this.router.navigate(['/MyPolicies']);
  console.log(this.policy);
  

}




}
