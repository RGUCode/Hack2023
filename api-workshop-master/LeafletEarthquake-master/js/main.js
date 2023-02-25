/**
 * @Author: John Isaacs <john>
 * @Date:   11-Apr-172017
 * @Filename: main.js
* @Last modified by:   john
* @Last modified time: 16-Apr-172017
 */



//set the map and initial coordinates
var mymap = L.map('mapid').setView([0, 0], 1);

//set the initial tilelayer
//I've used ESRI but there are loads of others here https://leaflet-extras.github.io/leaflet-providers/preview/

var Esri_WorldGrayCanvas = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
    maxZoom: 16
});

//add the tilelayer to the map
//Esri_WorldGrayCanvas.addTo(mymap);

//here is another tile system you can try
var OpenTopoMap = L.tileLayer('http://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

OpenTopoMap.addTo(mymap);

//when the button on is clicked
$('#shakey').click(function() {
    console.log("getting quakes");
    $.getJSON("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson", function(result) {
        //response data is now in the result variable
        //uncomment the line below to see the raw json, this would let you see the structure of the response
        //console.log(result)
        //I know that the earthquakes are defined in an array (or list) result.features
        result.features.forEach(function(quake) {
            //for each earthquake
            //get its coordinates
            var lng = quake.geometry.coordinates[0];
            var lat = quake.geometry.coordinates[1];
            //and it magnitude
            var mag = parseFloat(quake.properties.mag);
            //for each earthquake create a circle

            var circle = L.circle([lat, lng], mag * 50000, {
                    color: 'red',
                    opacity: 0,
                    fillColor: 'red',
                    fillOpacity: 0.8
                })
                //and add it to the map
            circle.addTo(mymap);
        });
    });
});


