//Variables used in the map
let map, infoWindow;
//Variables to grab user geolocation latitude and longitude
const userLat, userLon;

//callback function to initializ the map object
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 44.8082335,
            lng: -93.3368165
        },
        zoom: 15
    });

    //creating the new infoWindow object in map and assigning to our variable
    infoWindow = new google.maps.InfoWindow;

    //Getting user's Geolocation from their web browser
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            userLat = pos.lat;
            userLon = pos.lng;
            //setting the position obtained with geolocation
            infoWindow.setPosition(pos);
            infoWindow.setContent('You are here Honeydew');
            //adding the infowindow object to our map
            infoWindow.open(map);
            // Centering the map to our position
            map.setCenter(pos);
        }, function() { //handling browser errors
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}

$(".btn").on("click", function () {

  console.log(userLat, userLon);
    $.ajax({
      url:
        "https://www.hikingproject.com/data/get-trails?lat=" +
        userLat +
        "&lon=" +
        userLon +
        "&key=200874565-62446926939ed189f06ed0cc53a559e6",
      type: "GET",
      success: function (data) {
        console.log(data);
        $(".dTrails").text(data.trails.name);
      },
    });
});
