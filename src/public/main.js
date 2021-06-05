var user = prompt("Escribe tu nombre");

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

// setTimeout(() => {
map.locate({ enableHighAccuracy: true });
map.on('locationfound', (e) => {
   const radius = e.accuracy;
   const lat = e.latlng.lat;
   const lng = e.latlng.lng;
   L.circle(e.latlng, radius).addTo(map);
   L.marker([lat, lng]).addTo(map)
      .bindPopup(user)
      .openPopup();
   socket.emit('userLocation', {location: e.latlng, name: user});
});
// }, 3000)

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
   maxZoom: 25,
   id: 'mapbox/streets-v11'
}).addTo(map);

socket.on('newUserLocation', (data) => {
   console.log(123123132);
   const newUserMarker = L.marker([data.location.lat, data.location.lng]);
   newUserMarker.bindPopup(data.name);
   map.addLayer(newUserMarker);
});