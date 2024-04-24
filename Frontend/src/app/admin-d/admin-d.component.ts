import { Component, OnInit } from '@angular/core';
import { Driver } from '../driver';
import { DriverService } from '../driver.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-d',
  templateUrl: './admin-d.component.html',
  styleUrls: ['./admin-d.component.css']
})
export class AdminDComponent implements OnInit{

  driver!:Driver[];
  user!:User[];

constructor(private driverService:DriverService, private userService:UserService, private router:Router){

}


  ngOnInit(): void {
   
    this.getDriver();
    this.getUser();
  }

  getDriver() {
   this.driverService.getDriverList().subscribe(data=>{
    this.driver=data;
   });
  }

  driverDetails(id:number){
    this.router.navigate(['admin-r', id]);
  }

  updateDriver(id:number){
    this.router.navigate(['admin-r', id]);
  }

  deleteDriver(id:number){
    this.driverService.deleteDriver(id).subscribe(data=>{
      console.log(data);
      this.getDriver();
    });
  }


  getUser() {
    this.userService.getUserList().subscribe(data=>{
     this.user=data;
    });
   }
 
   userDetails(id:number){
     this.router.navigate(['admin-r', id]);
   }
 
   updateUser(id:number){
     this.router.navigate(['admin-r', id]);
   }
 
   deleteUser(id:number){
     this.userService.deleteUser(id).subscribe(data=>{
       console.log(data);
       this.getUser();
     });
   }
}
