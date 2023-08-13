import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentDto } from '../classes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseUrl="http://localhost:9090/payments";

  constructor(private httpClient:HttpClient) { }

  getPaymentsList():Observable<PaymentDto[]>{
    return this.httpClient.get<PaymentDto[]>(`${this.baseUrl}/allpayments`);

  }
  

  

  
}
