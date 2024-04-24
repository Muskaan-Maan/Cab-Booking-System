import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BookingDashboardComponent } from './booking-dashboard/booking-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DriverLoginComponent } from './driver-login/driver-login.component';
import { DriverRegisterComponent } from './driver-register/driver-register.component';
import { DriverDashboardComponent } from './driver-dashboard/driver-dashboard.component';
import { HomeComponent } from './home/home.component';
import { AdminLComponent } from './admin-l/admin-l.component';
import { AdminDComponent } from './admin-d/admin-d.component';
import { AdminRComponent } from './admin-r/admin-r.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {component: RegisterComponent, path: "register"},
  {component: LoginComponent, path: "login"},
  {component: BookingDashboardComponent, path: "booking-dashboard"},
  {component: DashboardComponent, path: "dashboard"},
  {component: DriverLoginComponent, path: "driver-login"},
  {component: DriverRegisterComponent, path: "driver-register"},
  {component: DriverDashboardComponent, path: "driver-dash"},
  {component: HomeComponent, path: "home"},
  {component: AdminLComponent, path: "admin-l"},
  {component: AdminDComponent, path: "admin-d"},
  {component: AdminRComponent, path: "admin-r"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
