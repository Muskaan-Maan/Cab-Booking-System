import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BookingDashboardComponent } from './booking-dashboard/booking-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapDistanceComponent } from './map-distance/map-distance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DriverLoginComponent } from './driver-login/driver-login.component';
import { DriverRegisterComponent } from './driver-register/driver-register.component';
import { DriverDashboardComponent } from './driver-dashboard/driver-dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { AdminLComponent } from './admin-l/admin-l.component';
import { AdminDComponent } from './admin-d/admin-d.component';
import { AdminRComponent } from './admin-r/admin-r.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    BookingDashboardComponent,
    MapDistanceComponent,
    DashboardComponent,
    DriverLoginComponent,
    DriverRegisterComponent,
    DriverDashboardComponent,
    HomeComponent,
    AdminLComponent,
    AdminDComponent,
    AdminRComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleMapsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
