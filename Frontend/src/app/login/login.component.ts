import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  user:User = new User();
  msg='';
  public loginForm! : FormGroup;
  

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private userService:UserService) {

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      
      email:['', Validators.required],
      password:['', Validators.required]
     
    })
  }

  login() {

  this.userService.loginUserFromRemote(this.user).subscribe(
    data => {
      console.log("response received");
      this.router.navigate(['dashboard'])
    },
    error => {
      console.log("exception occured");
      this.msg="Bad Credential, please enter valid emailId and password";
    })
  }
}
