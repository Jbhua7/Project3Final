var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {center: {lat: 41.8802, lng: -87.6238}, zoom: 15,})

  var marker = new google.maps.Marker({position: {lat:41.8802,lng:-87.6238}, map:map, animation: google.maps.Animation.BOUNCE});

  var info = new google.maps.InfoWindow({
    content: "<h5>This is my favorite area in Chicago</h5>"
  })
  info.open(map,marker)


  const location = [
    {lat: 41.882387,lng:-87.619634},
    {lat:41.876536,lng:-87.628181}
  ]

  var line = new google.maps.Polyline({
    path: location,
    strokeColor: "C0C0C0",
    strokeWeight: 7,
    strokeOpacity: 1.0,
    geodesic: true,
  });
  line.setMap(map);

};

window.initMap=initMap;