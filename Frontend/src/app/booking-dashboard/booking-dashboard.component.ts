import { Component,  ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-dashboard',
  templateUrl: './booking-dashboard.component.html',
  styleUrls: ['./booking-dashboard.component.css']
})
export class BookingDashboardComponent implements OnInit{


  price!: number;

  @ViewChild('originInput') originInputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('destinationInput') destinationInputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('distance') distanceRef!: ElementRef<HTMLInputElement>;

  private directionsService: google.maps.DirectionsService = new google.maps.DirectionsService();
  private directionsRenderer: google.maps.DirectionsRenderer = new google.maps.DirectionsRenderer();
  distanceValue!: number;
  rideType: string ='';
  showRideDetail = false;
  origin!:string;
  destination!:string;

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.directionsRenderer.setMap(new google.maps.Map(this.mapRef.nativeElement, {
      zoom: 7,
      center: { lat: 41.85, lng: -87.65 }
    }));
    const originAutocomplete = new google.maps.places.Autocomplete(this.originInputRef.nativeElement);
    originAutocomplete.setFields(['place_id', 'formatted_address', 'geometry']);
    const destinationAutocomplete = new google.maps.places.Autocomplete(this.destinationInputRef.nativeElement);
    destinationAutocomplete.setFields(['place_id', 'formatted_address', 'geometry']);
  }

  calculateAndDisplayRoute() {
    const origin = this.originInputRef.nativeElement.value;
    const destination = this.destinationInputRef.nativeElement.value;
    if (!origin || !destination) {
      return;
    }
    this.directionsService.route({
      origin,
      destination,
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.IMPERIAL
    }, (response, status) => {
      if (status === google.maps.DirectionsStatus.OK && response && response.routes.length > 0 && response.routes[0].legs.length > 0) {
        this.directionsRenderer.setDirections(response);
        const distance = response.routes[0].legs[0].distance ? response.routes[0].legs[0].distance.value : null;
        if (distance) {


          this.distanceValue = distance /1000;
          this.origin = this.originInputRef.nativeElement.value; 
          this.destination = this.destinationInputRef.nativeElement.value;
          
     }  else {
        window.alert('Directions request failed due to ' + status);
      }

     
    }
    });
  }

  @ViewChild('map') mapRef!: ElementRef<HTMLDivElement>;


  auto(){
    this.showRideDetail = true;
    this.price = this.distanceValue * 10;
    this.rideType = 'Auto';
  }

  miniCab(){
    this.showRideDetail = true;
    this.price = this.distanceValue * 20;
    this.rideType = 'Mini Cab';
  }

  cabXL(){
    this.showRideDetail = true;
    this.price = this.distanceValue * 30;
    this.rideType = 'Cab XL';
  }

  cabPremium(){
    this.showRideDetail = true;
    this.price = this.distanceValue * 50;
    this.rideType = 'Cab Premium';
  }



  
}
