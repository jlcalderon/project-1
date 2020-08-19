//Map API Functions
let map, infoWindow, userLat, userLon;
var pos;
//Initializing the map object
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 44.8115263, lng: -93.3288194 },
    zoom: 15,
  });
  //creating the infowindow element to display location
  infoWindow = new google.maps.InfoWindow();

  // Try HTML5 geolocation. Getting users's current geolocation
  if (navigator.geolocation) {
    //The next lines are going to be executed only if the users allow the browser to grab their location
    navigator.geolocation.getCurrentPosition(
      function (position) {
        pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        //Filling variables to get users current location and use it later for the weather and hiking api's
        userLat = pos.lat;
        userLon = pos.lng;
        hikingTrailsCall(userLat, userLon);
        getWeather(userLat, userLon);
        infoWindow.setPosition(pos);
        infoWindow.setContent("You are here!");
        //infoWindow.open(map);
        var marker = new google.maps.Marker({
          position: pos,
          map: map,
          title: "You are here",
        });

        marker.addListener("click", () => {
          infoWindow.open(map, marker);
          console.log(JSON.stringify(marker.position));
        });

        map.setCenter(pos);
        console.log(`users lat: ${userLat} , users lng: ${userLon}`);
      },
      function () {
        handleLocationError(true, infoWindow, map.getCenter());
      }
    );
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}
//Handling errors of geolocation with API methods
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}
//Printing users location before user click allow the browser get my location
console.log(`users lat: ${userLat} , users lng: ${userLon}`);

// hiking
/* $(".hikingBtn").on("click", function() {
    let latEntry = $("input.latEntry").val();
    let lonEntry = $("input.lonEntry").val();
    console.log("clicked"); */

console.log(userLat + "," + userLon);
/* if (latEntry && lonEntry != "") { */
function hikingTrailsCall(lat, lng) {
  var hikingUrl = `https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lng}&key=200874565-62446926939ed189f06ed0cc53a559e6`;
  $.ajax({
    url: hikingUrl,
    method: "GET",
  }).then(function (data) {
    console.log(data);

    let trail1image = data.trails[0].imgMedium;
    let trail2image = data.trails[1].imgMedium;
    let trail3image = data.trails[2].imgMedium;
    let trail4image = data.trails[3].imgMedium;
    let trail5image = data.trails[4].imgMedium;
    let trail6image = data.trails[5].imgMedium;
    let trail7image = data.trails[6].imgMedium;
    let trail8image = data.trails[7].imgMedium;
    let trail9image = data.trails[8].imgMedium;
    let trail10image = data.trails[9].imgMedium;
    console.log(trail1image);

    // trail 1
    $(".t1name").text(data.trails[0].name);
    $(".t1difficulty").text(data.trails[0].difficulty);
    $(".t1rating").text(data.trails[0].stars);
    $(".t1location").text(data.trails[0].location);
    $(".t1length").text(data.trails[0].length);
    $(".t1img").html("<img src=" + trail1image + "></img>");
    // trail 2
    $(".t2name").text(data.trails[1].name);
    $(".t2difficulty").text(data.trails[1].difficulty);
    $(".t2rating").text(data.trails[1].stars);
    $(".t2location").text(data.trails[1].location);
    $(".t2length").text(data.trails[1].length);
    $(".t1img").html("<img src=" + trail1image + "></img>");
    // trail 3
    $(".t3name").text(data.trails[2].name);
    $(".t3difficulty").text(data.trails[2].difficulty);
    $(".t3rating").text(data.trails[2].stars);
    $(".t3location").text(data.trails[2].location);
    $(".t3length").text(data.trails[2].length);
    $(".t1img").html("<img src=" + trail1image + "></img>");
    // trail 4
    $(".t4name").text(data.trails[3].name);
    $(".t4difficulty").text(data.trails[3].difficulty);
    $(".t4rating").text(data.trails[3].stars);
    $(".t4location").text(data.trails[3].location);
    $(".t4length").text(data.trails[3].length);
    $(".t1img").html("<img src=" + trail1image + "></img>");
    // trail 5
    $(".t5name").text(data.trails[4].name);
    $(".t5difficulty").text(data.trails[4].difficulty);
    $(".t5rating").text(data.trails[4].stars);
    $(".t5location").text(data.trails[4].location);
    $(".t5length").text(data.trails[4].length);
    $(".t1img").html("<img src=" + trail1image + "></img>");
    // trail 6
    $(".t6name").text(data.trails[5].name);
    $(".t6difficulty").text(data.trails[5].difficulty);
    $(".t6rating").text(data.trails[5].stars);
    $(".t6location").text(data.trails[5].location);
    $(".t6length").text(data.trails[5].length);
    $(".t1img").html("<img src=" + trail1image + "></img>");
    // trail 7
    $(".t7name").text(data.trails[6].name);
    $(".t7difficulty").text(data.trails[6].difficulty);
    $(".t7rating").text(data.trails[6].stars);
    $(".t7location").text(data.trails[6].location);
    $(".t7length").text(data.trails[6].length);
    $(".t1img").html("<img src=" + trail1image + "></img>");
    // trail 8
    $(".t8name").text(data.trails[7].name);
    $(".t8difficulty").text(data.trails[7].difficulty);
    $(".t8rating").text(data.trails[7].stars);
    $(".t8location").text(data.trails[7].location);
    $(".t8length").text(data.trails[7].length);
    $(".t1img").html("<img src=" + trail1image + "></img>");
    // trail 9
    $(".t9name").text(data.trails[8].name);
    $(".t9difficulty").text(data.trails[8].difficulty);
    $(".t9rating").text(data.trails[8].stars);
    $(".t9location").text(data.trails[8].location);
    $(".t9length").text(data.trails[8].length);
    $(".t1img").html("<img src=" + trail1image + "></img>");
    // trail 10
    $(".t10name").text(data.trails[9].name);
    $(".t10difficulty").text(data.trails[9].difficulty);
    $(".t10rating").text(data.trails[9].stars);
    $(".t10location").text(data.trails[9].location);
    $(".t10length").text(data.trails[9].length);
    $(".t1img").html("<img src=" + trail1image + "></img>");
  });
}

// weather
function getWeather(latitude, longitude) {
  var urlquery = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=1460cf8db2b228c70ad455e11901c547`;
  $.ajax({
    url: urlquery,
    method: "GET",
  }).then(function (response) {
    $(".temp").text("Current Weather: " + response.weather[0].description);
    $(".desc").text("temperature: " + response.main.temp);
    $(".wind").text("Curret Windspeed: " + response.wind.speed);
    $(".icon").attr(
      "src",
      `https://openweathermap.org/img/w/${response.weather[0].icon}.png`
    );
  });
}
