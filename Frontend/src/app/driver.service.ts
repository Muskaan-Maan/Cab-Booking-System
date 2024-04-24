import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Driver } from './driver';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private baseURL = "http://localhost:8085/api/v1/drivers";


  constructor(private httpClient:HttpClient) { }

  public registerUserFromRemote(driver:Driver):Observable<any>{
    return this.httpClient.post<any>("http://localhost:8085/api/v1/registerdriver",driver)
  }
  
  
    public loginUserFromRemote(driver : Driver):Observable<any>{
      return this.httpClient.post<any>("http://localhost:8085/api/v1/logindriver",driver);
     }

  getDriverList():Observable<Driver[]>{
    return this.httpClient.get<Driver[]>(`${this.baseURL}`);
  }

  createDriver(driver:Driver):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, driver);
  }

  getDriverById(id:number):Observable<Driver>{
    return this.httpClient.get<Driver>(`${this.baseURL}/${id}`);
  }

  updateDriver(id:number,driver:Driver):Observable<Object>{

    return this.httpClient.put(`${this.baseURL}`,driver);
  }

  deleteDriver(id:number):Observable<Object>{

    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
