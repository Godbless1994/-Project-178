let latitude=22.7868542, longtitude=88.3643296;

//Initailizing Mapbox

mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA'

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longtitude, latitude],
    zoom: 16
});

map.addControl(
    new mapboxgl.GeolocateControl({
        posititionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    })
);

<div class="container">
    <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12 text-center p-5">
            <h1>MONUMENTS</h1>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-12 text-center">
            <div id="map"></div>
        </div>
    </div>
    <div>
        <img id="amber" class="image-marker" src="./assets/AmberFort.jpg"> 
        <img id="gateway" class="image-marker" src="./assets/GatewayOf India.jpg"> 
        <img id="gate" class="image-marker" src="./assets/IndiaGate.jpg"> 
        <img id="lotus" class="image-marker" src="./assets/LotusTemple.jpg"> 
        <img id="victoria" class="image-marker" src="./assets/VictoriaMemorial.jpg"> 
    </div>
</div>


<link rel="stylesheet" href="./main.css" />
<script src="./main.js" type="text/javascript"></script>

