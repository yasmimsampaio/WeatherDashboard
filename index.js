$(document).ready(function(){
    console.log("hi");
    function searchBtn(){
        var cities = $("#searchInput").val();
        console.log(cities);
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+ cities + "&appid=7abf01c86fc755fc7a3d5b5221927bc7"
        $.ajax({
            url: queryURL,
            method: "GET"
          })
            .then(function(response) {
                console.log(response);
                $("#cityTitle").text(response.name);
            })
        
    }
    $("#searchBtn").on("click", searchBtn);
})

