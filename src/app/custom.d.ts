declare global {
  namespace google.maps {
    interface Map {
      markers: Array<any>;
      clearMarkers(): void;
    }
    interface Marker {
      _setMap(map: Map): void;
      setMap(map: Map): void;
    }
  }
}
export default global;
