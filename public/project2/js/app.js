// Get Access Token form https://www.mapbox.com/
var accessToken = "pk.eyJ1IjoiaGFpZmFocnVsIiwiYSI6ImNqbXUxbXJ1ZjA2ZDkzeG13cmRsc2JhbGgifQ.C8-BwgcVumaBTPfNqZ5uyA";
// Address : Long, Lat
var cempakaPutih = [-6.176522, 106.873289];
var map = L.map("map").setView(cempakaPutih, 15);

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 17,
  id: "mapbox.streets",
  accessToken: accessToken
}).addTo(map);

var marker = L.marker(cempakaPutih).addTo(map);
var circle = L.circle(cempakaPutih, {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 500
}).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");

var popup = L.popup();
function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("Lokasi yang dipilih: " + e.latlng.toString())
    .openOn(map);
}
map.on("click", onMapClick);
