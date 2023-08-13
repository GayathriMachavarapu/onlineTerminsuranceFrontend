import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PolicyDto, PolicyResponse } from '../classes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  private baseUrl="http://localhost:9092/policy";

  constructor(private httpClient:HttpClient) { }

  getPoliciesList():Observable<PolicyResponse[]>{
    return this.httpClient.get<PolicyResponse[]>(`${this.baseUrl}/getAllPolicies`);

  }

  addPolicy(policy: PolicyResponse): Observable<Object> {
    return this.httpClient.post<PolicyResponse>(`${this.baseUrl}/addpolicy`, policy);
  }

  findById(policyId: number): Observable<PolicyResponse> {
    return this.httpClient.get<PolicyResponse>(`${this.baseUrl}/findpolicy/${policyId}`);
  }


  updatePolicy(policyId: number, policy: PolicyResponse): Observable<PolicyResponse> {
    return this.httpClient.put<PolicyResponse>(`${this.baseUrl}/updatepolicy/${policyId}`, policy);
  }

  deletePolicy(policyId: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/deletepolicy/${policyId}`);
  }

  
}
