
var user = prompt("Escribe tu nombre");
var userLocation = null;
var userMarker = null;

const socket = io.connect();

// var map = L.map('map').fitWorld();
// map.locate({ setView: true, maxZoom: 16 });
const map = L.map('map', {
   center: [10.996730821187757, -74.79675837301376],
   zoom: 15
});

L.marker([10.996730821187757, -74.79675837301376]).addTo(map)
   .bindPopup('TAE')
   .openPopup();

// function getLocation() {
//    map.locate({ enableHighAccuracy: true });
//    map.on('locationfound', (e) => {

//       const lat = e.latlng.lat;
//       const lng = e.latlng.lng;
//       if (userMarker) {
//          map.removeLayer(userMarker);
//          userMarker = L.marker([lat, lng]);
//          userMarker.bindPopup(user);
//          map.addLayer(userMarker);
//          socket.emit('userLocation', { location: e.latlng, name: user });
//       } else {
//          userMarker = L.marker([lat, lng]);
//          userMarker.bindPopup(user);
//          map.addLayer(userMarker);
//       }

//    });
// }

const watchID = navigator.geolocation.watchPosition(function (position) {

   alert('te estoy seguiendo...')
   const lat = position.coords.latitude;
   const lng = position.coords.longitude;
   const latlng = { lat, lng }
   if (userMarker) {
      map.removeLayer(userMarker);
      userMarker = L.marker([lat, lng]);
      userMarker.bindPopup(user);
      map.addLayer(userMarker);
      socket.emit('userLocation', { location: latlng, name: user });
   } else {
      userMarker = L.marker([lat, lng]);
      userMarker.bindPopup(user);
      map.addLayer(userMarker);
   }

});
// setInterval(() => {
//    console.log('cambio');
//    getLocation();
// }, 3000);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
   maxZoom: 25,
   id: 'mapbox/streets-v11'
}).addTo(map);

socket.on('newUserLocation', (data) => {
   const newUserMarker = L.marker([data.location.lat, data.location.lng]);
   newUserMarker.bindPopup(data.name);
   map.addLayer(newUserMarker);
});
