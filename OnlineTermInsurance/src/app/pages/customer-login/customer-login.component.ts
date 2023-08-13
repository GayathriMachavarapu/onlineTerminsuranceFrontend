import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { UserDto, userResponse } from 'src/app/classes';
import { FormControl,FormGroup } from '@angular/forms';
import { getMatFormFieldDuplicatedHintError } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit{
  userR:userResponse=new userResponse();
  user_records:any[]=[];
  data={
    'userName':"",
    'password':""

  }
  constructor(private snack:MatSnackBar,private router:Router,private userService:UserService){


  }
  ngOnInit(): void {
   
    
  }
  
  
  doSignIn(Values:any){
    
    this.user_records=JSON.parse(localStorage.getItem('users' )||'{}');
    if(this.user_records.some((v)=>{
      return v.password==this.data.password
    })){
      alert("Duplicate Data");

    }

    else{
      this.user_records.push(this.data);
      localStorage.setItem('users',JSON.stringify(this.user_records));
      alert("Hi "+this.data.userName+"You Are Succesfully registered");
    }
    
  }
  
 
 getUserbyusername(userName:string){
  this.userService.getUserByUsername(userName).subscribe(data=>{
    this.userR=data;
    if(data.userName===this.userR.userName && data.password===this.userR.password){
     console.log("matched");
      // sign();


    }

  });


 } 
  
 
}


// function sign(this: any) {
//   this.router.navigate(['/SignIn']);
// }

