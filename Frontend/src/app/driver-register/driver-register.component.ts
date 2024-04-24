import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Driver } from '../driver';
import { DriverService } from '../driver.service';

@Component({
  selector: 'app-driver-register',
  templateUrl: './driver-register.component.html',
  styleUrls: ['./driver-register.component.css']
})
export class DriverRegisterComponent implements OnInit{

  driver:Driver = new Driver();
  msg="";
  public registerForm! : FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private driverService:DriverService) {

  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullname:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required],
      mobile:['', Validators.required],
      carmodel:['', Validators.required],
      carnum:['', Validators.required]
    })
  }

  register() {

   /* this.http.post<any>("http://localhost:3000/registerdrivers", this.registerForm.value)
    .subscribe(res=>{
      alert("Registration Successfull");
      this.registerForm.reset();

      this.router.navigate(['driver-login']);
    }, err=>{
      alert("Something went wrong");
    })*/


    this.driverService.registerUserFromRemote(this.driver).subscribe(
      data =>{
        console.log('response received');
        this.msg="Registration successful";
        this.router.navigate(['driver-login']);
      },
      error =>{
        console.log('exception occured');
        this.msg=error.error;
      }
    )
  }
}
