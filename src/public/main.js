const socket = io.connect();

if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(function (position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;

      console.log(latitude, longitude);
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
         id: 'mapbox/streets-v11'
      }).addTo(map);

      L.marker([10.996730821187757, -74.79675837301376]).addTo(map)
      .bindPopup('TAE')
      .openPopup();

      L.marker([latitude, longitude]).addTo(map)
         .bindPopup('Tu ubicación')
         .openPopup();

   });
} else {
   alert('Necesitamos acceder a tu ubicacion')
}