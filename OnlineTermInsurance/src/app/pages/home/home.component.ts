import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  constructor(private router:Router){

  }
  CustBtn(){
    this.router.navigate(['AdminLogin']);

}
HomeBtn(){
  this.router.navigate(['Home']);

}
RegBtn(){
  this.router.navigate(['CustomerLogin']);
}
AboutBtn(){
  this.router.navigate(['AboutUs']);
}
ContactBtn(){
  this.router.navigate(['ContactUs']);
}


}
