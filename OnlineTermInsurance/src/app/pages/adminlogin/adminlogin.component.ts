import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { adminResponse } from 'src/app/classes';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit{
  adminR:adminResponse=new adminResponse();
  user_records:any[]=[];
  data={
    'userName':"",
    'password':""

  }
  constructor(private router:Router,private adminService:AdminService){

  }
  ngOnInit(): void {
    
  }
  doSignIn(Values:any){
    
    this.user_records=JSON.parse(localStorage.getItem('users' )||'{}');
    if(this.user_records.some((v)=>{
      return v.password==this.data.password
    })){
      //alert("Duplicate Data");

    }
    else{
      this.user_records.push(this.data);
      localStorage.setItem('users',JSON.stringify(this.user_records));
      alert("user name is not registered");
    }
    
 
}
getUserbyUsername(userName:string){
  this.adminService.getAdminCredentials(userName).subscribe(data=>{
    this.adminR=data;
    if (data.userName==this.adminR.userName ) {
      if(data.password===this.adminR.password){
      alert("succussfully login");
     console.log("matched");
     this.sign();
      }
     
     
    }
    else{
      alert("userName or password is inavlid");
      console.log("notmatched");
    }

    
    
    

  });
  
  
  


 } 
 sign(){
  this.router.navigate(['/signIn']);

 }
 
}


