import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { customerRequest, customerResponse } from '../classes';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl="http://localhost:9091/user";

  constructor(private httpClient :HttpClient) { }

  getCustomerList():Observable<customerRequest[]>{
    return this.httpClient.get<customerRequest[]>(`${this.baseUrl}/customer/viewAllCustomer`);

  }
  getPoliciesList(customerId:number):Observable<customerResponse[]>{
    return this.httpClient.get<customerResponse[]>(`${this.baseUrl}/customer/viewPolicies/{customerId}`)
  }
  

}
