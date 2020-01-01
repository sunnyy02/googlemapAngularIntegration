import { Component, ViewChild, OnInit } from '@angular/core';
import {} from 'googlemaps';
import './custom-map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'googleMapExample';
  positoins =[new google.maps.LatLng(35.2271, -80.8431), new google.maps.LatLng(35.2232, -80.8412)];

  @ViewChild('map', {static: false}) mapElement: any;
  map: google.maps.Map;

  ngOnInit(): void {
    setTimeout(x =>{
      this.initMap();
      this.addMarkers();
    }, 0);
 }

  private addMarkers() {
    this.positoins.map(p => {
      this.createMarker(p);
    });
  }

  private initMap() {
    const mapProperties = {
      center: new google.maps.LatLng(35.2271, -80.8431),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
  }

  createMarker(latLng: google.maps.LatLng) {
    const marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      zIndex: 100
    });
    marker.setMap(this.map);
  }

  clearAllMarkers() {
    this.initMap();
    this.map.clearMarkers();
  }
}
