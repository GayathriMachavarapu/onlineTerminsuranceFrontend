import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userResponse } from '../classes';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  private _Url="http://localhost:9091/user";

getUserByUsername(userName:string){
  return this.httpClient.get<userResponse>(`${this._Url}/User/credentials/${userName}`);
}
  
}
