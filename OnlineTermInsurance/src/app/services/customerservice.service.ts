import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {
  private _url='http://localhost:9091/user/customer';

  constructor(private http:HttpClient) {
    
   }
   public addCustomer(customer:any){
    return this.http.post(`${this._url}/addCustomer`,customer);
   }
}
