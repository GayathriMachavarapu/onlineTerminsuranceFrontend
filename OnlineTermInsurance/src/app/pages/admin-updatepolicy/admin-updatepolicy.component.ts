import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PolicyResponse } from 'src/app/classes';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'app-admin-updatepolicy',
  templateUrl: './admin-updatepolicy.component.html',
  styleUrls: ['./admin-updatepolicy.component.css']
})
export class AdminUpdatepolicyComponent {
  policyId!: number;

  policy: PolicyResponse = new PolicyResponse();

 

 

  constructor(private policyService:PolicyService,
    private route: ActivatedRoute,

    private router: Router) { }

 

  ngOnInit(): void {

   this.policyId = this.route.snapshot.params['policyId'];

 

    this.policyService.findById(this.policyId).subscribe(data => {

      this.policy = data;

    }, error => console.log(error));
  }

  
  

 

  onSubmit(){

    this.policyService.updatePolicy(this.policyId, this.policy).subscribe( data =>{

      this.goToPolicyList();
      

    },

   error => console.log(error));

  }

 

  goToPolicyList(){

    this.router.navigate(['/Admin-Policies']);
    

  }

  }

