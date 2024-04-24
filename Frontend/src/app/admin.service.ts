import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from './admin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient:HttpClient){}
 
  public registerAdminFromRemote(admin:Admin):Observable<any>{
    return this.httpClient.post<any>("http://localhost:8085/api/v1/registeradmin",admin)
  }
  
  
    public loginAdminFromRemote(admin : Admin):Observable<any>{
      return this.httpClient.post<any>("http://localhost:8085/api/v1/loginadmin",admin);
     }
}
