"use strict";

let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 44.8082335,
            lng: -93.3368165
        },
        zoom: 15
    });
}