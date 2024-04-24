import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Admin } from '../admin';

@Component({
  selector: 'app-admin-r',
  templateUrl: './admin-r.component.html',
  styleUrls: ['./admin-r.component.css']
})
export class AdminRComponent implements OnInit{


  admin:Admin = new Admin();
  msg='';
  public registerForm! : FormGroup;
  

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private adminService:AdminService) {

  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      
      email:['', Validators.required],
      password:['', Validators.required]
     
    })
  }

  register() {

    this.adminService.registerAdminFromRemote(this.admin).subscribe(
      data =>{
        console.log('response received');
        this.msg="Registration successful";
        this.router.navigate(['admin-l']);
      },
      error =>{
        console.log('exception occured');
        this.msg=error.error;
      }
    )
  }
}
