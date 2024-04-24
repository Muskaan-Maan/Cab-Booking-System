import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-distance',
  templateUrl: './map-distance.component.html',
  styleUrls: ['./map-distance.component.css']
})
export class MapDistanceComponent implements OnInit{
  @ViewChild('originInput') originInputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('destinationInput') destinationInputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('distance') distanceRef!: ElementRef<HTMLInputElement>;

  private directionsService: google.maps.DirectionsService = new google.maps.DirectionsService();
  private directionsRenderer: google.maps.DirectionsRenderer = new google.maps.DirectionsRenderer();
  distanceValue!: number;
  rideType: string ='';
  price!: number;
  

  ngOnInit(): void {
    
  }

  calculatePrice(){
    
    switch (this.rideType) {
      case 'Auto':
        this.rideType = 'Auto';
        
        break;
      case 'Mini Cab':
        this.rideType = 'Mini Cab';
        
        break;
      case 'Cab XL':
        this.rideType = 'Cab XL';
       
        break;
      case 'Cab Premium':
        this.rideType = 'Cab Premium';
        
        break;
      default:
        this.rideType = '';
        break;
    }
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
          if(this.rideType == 'Auto'){
            this.price = this.distanceValue * 10;
          }else{
            this.price = 0;
          }
        
                  
     }  else {
        window.alert('Directions request failed due to ' + status);
      }

     
    }
    });
  }

  @ViewChild('map') mapRef!: ElementRef<HTMLDivElement>;




  

  
}





  // this.distanceValue = this.distanceValue / 1609.34;
      
        // this.distanceRef.nativeElement.value = String(distance);
        //  this.distanceValue = parseFloat(this.distanceRef.nativeElement.value);