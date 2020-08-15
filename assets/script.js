$(".btn").on("click", function () {
  let latEntry = $("input.latEntry").val();
  let lonEntry = $("input.lonEntry").val();

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
        $(".dTrails").text(data.trails.name);
      },
    });
  } else {
    location.reload();
  }
});
