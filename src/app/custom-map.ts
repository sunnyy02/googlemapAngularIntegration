import {} from 'googlemaps';

google.maps.Map.prototype.markers = new Array();

google.maps.Map.prototype.clearMarkers = () => {
  if (this.markers) {
    this.markers.map(x => x.setMap(null));
  }
};

google.maps.Marker.prototype._setMap = google.maps.Marker.prototype.setMap;

google.maps.Marker.prototype.setMap = function(map: google.maps.Map) {
  if (map) {
    map.markers[map.markers.length] = this;
  }
  this._setMap(map);
};
