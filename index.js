$(document).ready(function(){
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
                $("#cityTemp").text(response.main.temp);
                $("#cityHumid").text(response.main.humidity);
                $("#cityWindSpeed").text(response.wind.speed);
                // $("#cityUVIndex").text(response.name);
            })

        // var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q="+ cities + "&appid=7abf01c86fc755fc7a3d5b5221927bc7"

        
    }

    $("#searchBtn").on("click", searchBtn);
})

