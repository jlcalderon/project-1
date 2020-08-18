//Variables used in the map
//let map, infoWindow;
//let BingMapAPIkey = 'ApOpGVS9mrvMVrJLvz6YkesBOxk9zLXZXh3q2LL0jtwmYvoA19KW55nu9f7lMtZC';
//Variables to grab user geolocation latitude and longitude
/* let userLat, userLon;​ */
//callback function to initializ the map object
//var map = new Microsoft.sections.Map('#map');
var map = L.map("map").setView([51.505, -0.09], 14);
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1Ijoiam9yZ2UtY2FsZGVyb24xIiwiYSI6ImNrZHpiN2l3azJqbzIydG55cHM3djhjMW0ifQ.GDahyKqMw0JTip33YyGVjw",
  }
).addTo(map);

// hiking
$(".hikingBtn").on("click", function () {
  let latEntry = $("input.latEntry").val();
  let lonEntry = $("input.lonEntry").val();
  console.log("clicked");

  console.log(latEntry, lonEntry);
  if (latEntry && lonEntry != "") {
    $.ajax({
      url:
        "https://www.hikingproject.com/data/get-trails?lat=" +
        latEntry +
        "&lon=" +
        lonEntry +
        "&key=200874565-62446926939ed189f06ed0cc53a559e6",
      type: "GET",
      success: function (data) {
        console.log(data);

        let trail1img = data.trails[0].imgSmall;
        console.log(trail1img);
        // trail 1
        $(".t1name").text(data.trails[0].name);
        $(".t1difficulty").text(data.trails[0].difficulty);
        $(".t1rating").text(data.trails[0].stars);
        $(".t1location").text(data.trails[0].location);
        $(".t1length").text(data.trails[0].length);
        $("t1img").html("<img src=" + trail1img + "></img>");
        // trail 2
        $(".t2name").text(data.trails[1].name);
        $(".t2difficulty").text(data.trails[1].difficulty);
        $(".t2rating").text(data.trails[1].stars);
        $(".t2location").text(data.trails[1].location);
        $(".t2length").text(data.trails[1].length);
        $("t2img").attr("src", data.trails[1].imgSmallMed);
        // trail 3
        $(".t3name").text(data.trails[2].name);
        $(".t3difficulty").text(data.trails[2].difficulty);
        $(".t3rating").text(data.trails[2].stars);
        $(".t3location").text(data.trails[2].location);
        $(".t3length").text(data.trails[2].length);
        $("t3img").attr("src='" + data.trails[2].imgSmallMed);
        // trail 4
        $(".t4name").text(data.trails[3].name);
        $(".t4difficulty").text(data.trails[3].difficulty);
        $(".t4rating").text(data.trails[3].stars);
        $(".t4location").text(data.trails[3].location);
        $(".t4length").text(data.trails[3].length);
        $("t4img").attr("src", data.trails[3].imgSmallMed);
        // trail 5
        $(".t5name").text(data.trails[4].name);
        $(".t5difficulty").text(data.trails[4].difficulty);
        $(".t5rating").text(data.trails[4].stars);
        $(".t5location").text(data.trails[4].location);
        $(".t5length").text(data.trails[4].length);
        $("t5img").attr("src", data.trails[4].imgSmallMed);
        // trail 6
        $(".t6name").text(data.trails[5].name);
        $(".t6difficulty").text(data.trails[5].difficulty);
        $(".t6rating").text(data.trails[5].stars);
        $(".t6location").text(data.trails[5].location);
        $(".t6length").text(data.trails[5].length);
        $("t6img").attr("src", data.trails[5].imgSmallMed);
        // trail 7
        $(".t7name").text(data.trails[6].name);
        $(".t7difficulty").text(data.trails[6].difficulty);
        $(".t7rating").text(data.trails[6].stars);
        $(".t7location").text(data.trails[6].location);
        $(".t7length").text(data.trails[6].length);
        $("t7img").attr("src", data.trails[6].imgSmallMed);
        // trail 8
        $(".t8name").text(data.trails[7].name);
        $(".t8difficulty").text(data.trails[7].difficulty);
        $(".t8rating").text(data.trails[7].stars);
        $(".t8location").text(data.trails[7].location);
        $(".t8length").text(data.trails[7].length);
        $("t8img").attr("src", data.trails[7].imgSmallMed);
        // trail 9
        $(".t9name").text(data.trails[8].name);
        $(".t9difficulty").text(data.trails[8].difficulty);
        $(".t9rating").text(data.trails[8].stars);
        $(".t9location").text(data.trails[8].location);
        $(".t9length").text(data.trails[8].length);
        $("t9img").attr("src", data.trails[8].imgSmallMed);
        // trail 10
        $(".t10name").text(data.trails[9].name);
        $(".t10difficulty").text(data.trails[9].difficulty);
        $(".t10rating").text(data.trails[9].stars);
        $(".t10location").text(data.trails[9].location);
        $(".t10length").text(data.trails[9].length);
        $("t10img").attr("src", data.trails[9].imgSmallMed);
      },
    });
  } else {
    location.reload();
  }
});

// weather
$(document).on("click", ".btn", function () {
  console.log("clicked");
  var search = $("#city");
  var urlquery =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    search.val() +
    "&units=imperial&appid=1460cf8db2b228c70ad455e11901c547";
  $.ajax({
    url: urlquery,
    method: "GET",
  }).then(function (response) {
    $(".temp").text("Current Weather: " + response.weather[0].description);
    $(".desc").text("temperature: " + response.main.temp);
    $(".wind").text("Curret Windspeed: " + response.wind.speed);
  });
});
