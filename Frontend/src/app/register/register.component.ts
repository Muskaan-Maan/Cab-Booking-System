import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  user:User = new User();
  msg="";
  public registerForm! : FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient , private router:Router,private userService:UserService){}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullname:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required],
      mobile:['', Validators.required]
    })
  }

  register() {

  this.userService.registerUserFromRemote(this.user).subscribe(
    data =>{
      console.log('response received');
      this.msg="Registration successful";
      this.router.navigate(['login']);
    },
    error =>{
      console.log('exception occured');
      this.msg=error.error;
    }
  )
}
}
