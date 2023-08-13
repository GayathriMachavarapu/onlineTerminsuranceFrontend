import { Component, OnInit } from '@angular/core';
import { PaymentDto } from 'src/app/classes';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-admin-payments',
  templateUrl: './admin-payments.component.html',
  styleUrls: ['./admin-payments.component.css']
})
export class AdminPaymentsComponent implements OnInit{
  payments:PaymentDto[]=[];
  constructor(private paymentService:PaymentService){

  }
  ngOnInit():void{
    this.getAllPayments();

  }
   private getAllPayments(){
   this.paymentService.getPaymentsList().subscribe(data=>
    {
      this.payments=data;
      console.log(data);
      
    });
    
    

  }

}
