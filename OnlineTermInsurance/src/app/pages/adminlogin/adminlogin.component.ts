import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit{
  user_records:any[]=[];
  data={
    'userName':"",
    'password':""

  }
  constructor(private router:Router){

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
}


