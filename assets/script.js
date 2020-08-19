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

console.log(userLat + "," + userLon);
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

    // trail 1
    $(".t1name").text(data.trails[0].name);
    $(".t1rating").text("Rating: " + data.trails[0].stars + "/5");
    if (data.trails[0].difficulty == "green") {
      $(".t1difficulty").text("Difficulty: Easy");
    } else if (data.trails[0].difficulty == "greenBlue") {
      $(".t1difficulty").text("Difficulty: Easy/Intermediate");
    } else if (data.trails[0].difficulty == "blue") {
      $(".t1difficulty").text("Difficulty: Intermediate");
    } else if (data.trails[0].difficulty == "blueBlack") {
      $(".t1difficulty").text("Difficulty: Difficult");
    } else if (data.trails[0].difficulty == "dblack") {
      $(".t1difficulty").text("Difficulty: Extremely Difficult");
    }
    $(".t1location").text(data.trails[0].location);
    $(".t1length").text("Length: " + data.trails[0].length + " miles");
    $(".t1img").html("<img src=" + trail1image + "></img>");
    // trail 2
    $(".t2name").text(data.trails[1].name);
    if (data.trails[1].difficulty == "green") {
      $(".t2difficulty").text("Difficulty: Easy");
    } else if (data.trails[1].difficulty == "greenBlue") {
      $(".t2difficulty").text("Difficulty: Easy/Intermediate");
    } else if (data.trails[1].difficulty == "blue") {
      $(".t2difficulty").text("Difficulty: Intermediate");
    } else if (data.trails[1].difficulty == "blueBlack") {
      $(".t2difficulty").text("Difficulty: Difficult");
    } else if (data.trails[1].difficulty == "dblack") {
      $(".t2difficulty").text("Difficulty: Extremely Difficult");
    }
    $(".t2rating").text("Rating: " + data.trails[1].stars + "/5");
    $(".t2location").text(data.trails[1].location);
    $(".t2length").text("Length: " + data.trails[1].length + " miles");
    $(".t2img").html("<img src=" + trail2image + "></img>");
    // trail 3
    $(".t3name").text(data.trails[2].name);
    if (data.trails[2].difficulty == "green") {
      $(".t3difficulty").text("Difficulty: Easy");
    } else if (data.trails[2].difficulty == "greenBlue") {
      $(".t3difficulty").text("Difficulty: Easy/Intermediate");
    } else if (data.trails[2].difficulty == "blue") {
      $(".t3difficulty").text("Difficulty: Intermediate");
    } else if (data.trails[2].difficulty == "blueBlack") {
      $(".t3difficulty").text("Difficulty: Difficult");
    } else if (data.trails[2].difficulty == "dblack") {
      $(".t3difficulty").text("Difficulty: Extremely Difficult");
    }
    $(".t3rating").text("Rating: " + data.trails[2].stars + "/5");
    $(".t3location").text(data.trails[2].location);
    $(".t3length").text("Length: " + data.trails[2].length + " miles");
    $(".t3img").html("<img src=" + trail3image + "></img>");
    // trail 4
    $(".t4name").text(data.trails[3].name);
    if (data.trails[3].difficulty == "green") {
      $(".t4difficulty").text("Difficulty: Easy");
    } else if (data.trails[3].difficulty == "greenBlue") {
      $(".t4difficulty").text("Difficulty: Easy/Intermediate");
    } else if (data.trails[3].difficulty == "blue") {
      $(".t4difficulty").text("Difficulty: Intermediate");
    } else if (data.trails[3].difficulty == "blueBlack") {
      $(".t4difficulty").text("Difficulty: Difficult");
    } else if (data.trails[3].difficulty == "dblack") {
      $(".t4difficulty").text("Difficulty: Extremely Difficult");
    }
    $(".t4rating").text("Rating: " + data.trails[3].stars + "/5");
    $(".t4location").text(data.trails[3].location);
    $(".t4length").text("Length: " + data.trails[3].length + " miles");
    $(".t4img").html("<img src=" + trail4image + "></img>");
    // trail 5
    $(".t5name").text(data.trails[4].name);
    if (data.trails[4].difficulty == "green") {
      $(".t5difficulty").text("Difficulty: Easy");
    } else if (data.trails[4].difficulty == "greenBlue") {
      $(".t5difficulty").text("Difficulty: Easy/Intermediate");
    } else if (data.trails[4].difficulty == "blue") {
      $(".t5difficulty").text("Difficulty: Intermediate");
    } else if (data.trails[4].difficulty == "blueBlack") {
      $(".t5difficulty").text("Difficulty: Difficult");
    } else if (data.trails[4].difficulty == "dblack") {
      $(".t5difficulty").text("Difficulty: Extremely Difficult");
    }
    $(".t5rating").text("Rating: " + data.trails[4].stars + "/5");
    $(".t5location").text(data.trails[4].location);
    $(".t5length").text("Length: " + data.trails[4].length + " miles");
    $(".t5img").html("<img src=" + trail5image + "></img>");
    // trail 6
    $(".t6name").text(data.trails[5].name);
    if (data.trails[5].difficulty == "green") {
      $(".t6difficulty").text("Difficulty: Easy");
    } else if (data.trails[5].difficulty == "greenBlue") {
      $(".t6difficulty").text("Difficulty: Easy/Intermediate");
    } else if (data.trails[5].difficulty == "blue") {
      $(".t6difficulty").text("Difficulty: Intermediate");
    } else if (data.trails[5].difficulty == "blueBlack") {
      $(".t6difficulty").text("Difficulty: Difficult");
    } else if (data.trails[5].difficulty == "dblack") {
      $(".t6difficulty").text("Difficulty: Extremely Difficult");
    }
    $(".t6rating").text("Rating: " + data.trails[5].stars + "/5");
    $(".t6location").text(data.trails[5].location);
    $(".t6length").text("Length: " + data.trails[5].length + " miles");
    $(".t6img").html("<img src=" + trail6image + "></img>");
    // trail 7
    $(".t7name").text(data.trails[6].name);
    if (data.trails[6].difficulty == "green") {
      $(".t7difficulty").text("Difficulty: Easy");
    } else if (data.trails[6].difficulty == "greenBlue") {
      $(".t7difficulty").text("Difficulty: Easy/Intermediate");
    } else if (data.trails[6].difficulty == "blue") {
      $(".t7difficulty").text("Difficulty: Intermediate");
    } else if (data.trails[6].difficulty == "blueBlack") {
      $(".t7difficulty").text("Difficulty: Difficult");
    } else if (data.trails[6].difficulty == "dblack") {
      $(".t7difficulty").text("Difficulty: Extremely Difficult");
    }
    $(".t7rating").text("Rating: " + data.trails[6].stars + "/5");
    $(".t7location").text(data.trails[6].location);
    $(".t7length").text("Length: " + data.trails[6].length + " miles");
    $(".t7img").html("<img src=" + trail7image + "></img>");
    // trail 8
    $(".t8name").text(data.trails[7].name);
    if (data.trails[7].difficulty == "green") {
      $(".t8difficulty").text("Difficulty: Easy");
    } else if (data.trails[7].difficulty == "greenBlue") {
      $(".t8difficulty").text("Difficulty: Easy/Intermediate");
    } else if (data.trails[7].difficulty == "blue") {
      $(".t8difficulty").text("Difficulty: Intermediate");
    } else if (data.trails[7].difficulty == "blueBlack") {
      $(".t8difficulty").text("Difficulty: Difficult");
    } else if (data.trails[7].difficulty == "dblack") {
      $(".t8difficulty").text("Difficulty: Extremely Difficult");
    }
    $(".t8rating").text("Rating: " + data.trails[7].stars + "/5");
    $(".t8location").text(data.trails[7].location);
    $(".t8length").text("Length: " + data.trails[7].length + " miles");
    $(".t8img").html("<img src=" + trail8image + "></img>");
    // trail 9
    $(".t9name").text(data.trails[8].name);
    if (data.trails[8].difficulty == "green") {
      $(".t9difficulty").text("Difficulty: Easy");
    } else if (data.trails[8].difficulty == "greenBlue") {
      $(".t9difficulty").text("Difficulty: Easy/Intermediate");
    } else if (data.trails[8].difficulty == "blue") {
      $(".t9difficulty").text("Difficulty: Intermediate");
    } else if (data.trails[8].difficulty == "blueBlack") {
      $(".t9difficulty").text("Difficulty: Difficult");
    } else if (data.trails[8].difficulty == "dblack") {
      $(".t9difficulty").text("Difficulty: Extremely Difficult");
    }
    $(".t9rating").text("Rating: " + data.trails[8].stars + "/5");
    $(".t9location").text(data.trails[8].location);
    $(".t9length").text("Length: " + data.trails[8].length + " miles");
    $(".t9img").html("<img src=" + trail9image + "></img>");
    // trail 10
    $(".t10name").text(data.trails[9].name);
    if (data.trails[9].difficulty == "green") {
      $(".t10difficulty").text("Difficulty: Easy");
    } else if (data.trails[9].difficulty == "greenBlue") {
      $(".t10difficulty").text("Difficulty: Easy/Intermediate");
    } else if (data.trails[9].difficulty == "blue") {
      $(".t10difficulty").text("Difficulty: Intermediate");
    } else if (data.trails[9].difficulty == "blueBlack") {
      $(".t10difficulty").text("Difficulty: Difficult");
    } else if (data.trails[9].difficulty == "dblack") {
      $(".t10difficulty").text("Difficulty: Extremely Difficult");
    }
    $(".t10rating").text("Rating: " + data.trails[9].stars + "/5");
    $(".t10location").text(data.trails[9].location);
    $(".t10length").text("Length: " + data.trails[9].length + " miles");
    $(".t10img").html("<img src=" + trail10image + "></img>");
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
