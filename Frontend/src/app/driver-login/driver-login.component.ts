import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Driver } from '../driver';
import { DriverService } from '../driver.service';

@Component({
  selector: 'app-driver-login',
  templateUrl: './driver-login.component.html',
  styleUrls: ['./driver-login.component.css']
})
export class DriverLoginComponent implements OnInit{

  driver:Driver = new Driver();
  msg='';
  public loginForm! : FormGroup;
  

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private driverService: DriverService) {

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      
      email:['', Validators.required],
      password:['', Validators.required]
     
    })
  }

  login() {

   /* this.http.get<any>("http://localhost:3000/registerdrivers")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;
      });

      if(user){
      alert("Login Successfull!");
      this.loginForm.reset();

      this.router.navigate(['driver-dash']);
    }else{
      alert("User Not Found");
        this.router.navigate(['driver-login']);
      }

    }, err=>{
      alert("Something went wrong");
    })*/

    this.driverService.loginUserFromRemote(this.driver).subscribe(
      data => {
        console.log("response received");
        this.router.navigate(['driver-dash'])
      },
      error => {
        console.log("exception occured");
        this.msg="Bad Credential, please enter valid emailId and password";
      })
  }
}

