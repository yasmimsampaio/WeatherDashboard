$(document).ready(function(){
    console.log("hi");
    function searchBtn(){
        var cities = $("#searchInput").val();
        console.log(cities);
    }
    $("#searchBtn").on("click", searchBtn);
})