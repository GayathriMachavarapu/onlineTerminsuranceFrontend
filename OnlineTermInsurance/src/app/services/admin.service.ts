import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { adminResponse } from '../classes';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl="http://localhost:9091/user";

  constructor(private httpClient:HttpClient) { }


  getAdminCredentials(userName:string){
    return this.httpClient.get<adminResponse>(`${this.baseUrl}/admin/credentials/${userName}`);
  }
}
