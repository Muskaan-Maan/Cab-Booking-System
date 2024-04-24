import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-l',
  templateUrl: './admin-l.component.html',
  styleUrls: ['./admin-l.component.css']
})
export class AdminLComponent implements OnInit{

  admin:Admin = new Admin();
  msg='';
  public loginForm! : FormGroup;
  

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private adminService:AdminService) {

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      
      email:['', Validators.required],
      password:['', Validators.required]
     
    })
  }

  login() {

    this.adminService.loginAdminFromRemote(this.admin).subscribe(
      data => {
        console.log("response received");
        this.router.navigate(['admin-d'])
      },
      error => {
        console.log("exception occured");
        this.msg="Bad Credential, please enter valid emailId and password";
      })
  }

}
