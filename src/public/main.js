const map = L.map('map', {
   center: [latitude, longitude],
   zoom: 15
});

map.locate({ enableHighAccuracy: true });
map.on('locationfound', (e) => {
   console.log(e);
});

var latitude = position.coords.latitude;
var longitude = position.coords.longitude;

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
   maxZoom: 25,
   attribution: 'Datos del mapa de &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>, ' + '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imágenes © <a href="https://www.mapbox.com/">Mapbox</a>',
   id: 'mapbox/streets-v11'
}).addTo(map);

L.marker([latitude, longitude]).addTo(map)
   .bindPopup('Tu ubicacion')
   .openPopup();

L.marker([10.989727871655939, -74.78856951470898]).addTo(map)
   .bindPopup('Portal de prado')
   .openPopup();

      // L.Routing.control({
      //    waypoints: [
      //       L.latLng(latitude, longitude),
      //       L.latLng(11.005652304937687, -74.81706619294472)
      //    ],
      //    language: 'es'
      // }).addTo(mymap);