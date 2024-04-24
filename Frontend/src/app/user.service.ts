import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:8085/api/v1/users";

  constructor(private httpClient:HttpClient){}
 
  public registerUserFromRemote(user:User):Observable<any>{
    return this.httpClient.post<any>("http://localhost:8085/api/v1/registeruser",user)
  }
  
  
    public loginUserFromRemote(user : User):Observable<any>{
      return this.httpClient.post<any>("http://localhost:8085/api/v1/login",user);
     }

     getUserList():Observable<User[]>{
      return this.httpClient.get<User[]>(`${this.baseURL}`);
    }
  
    createUser(user:User):Observable<Object>{
      return this.httpClient.post(`${this.baseURL}`, user);
    }
  
    getUserById(id:number):Observable<User>{
      return this.httpClient.get<User>(`${this.baseURL}/${id}`);
    }
  
    updateUser(id:number,user:User):Observable<Object>{
  
      return this.httpClient.put(`${this.baseURL}`,user);
    }
  
    deleteUser(id:number):Observable<Object>{
  
      return this.httpClient.delete(`${this.baseURL}/${id}`);
    }
}
