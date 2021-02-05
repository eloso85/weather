

let luxDate = (input)=>{
    const test =luxon.DateTime.fromISO(input.replace(" ", "T"))
  return test.toLocaleString(luxon.DateTime.DATETIME_MED)


}

console.log(luxDate('2021-02-05 21:00:00'))

function test(){

}
//"2017-05-15T08:30:00"
//2021-02-05 21:00:00

$("#submit").on("click", function () {
    /*var APIKey = "166a433c57516f51dfab1f7edaed8413";*/
    var city = $("#search").val();
    // Here we are building the URL we need to query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + ",us&units=imperial&APPID=166a433c57516f51dfab1f7edaed8413";
    var queryURL2 = "https://api.openweathermap.org/data/2.5/weather?zip=" + city + ",us&units=imperial&APPID=166a433c57516f51dfab1f7edaed8413";
    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // We store all of the retrieved data inside of an object called "response"
      .then(function (data) {

        

        //console.log(queryURL);

        //console.log(data);

        $(".card-title-0").html(`${data.list.map(function(days){
           var dataDate = luxDate(days.dt_txt)
          //console.log(luxDate(days.dt_txt))
          //console.log(days)
          //console.log(dataDate)
          return `<h5>${dataDate}<h5> + <h4>${days.main.temp}<h4> `
          
          
        }).join("")}`);
          
       
        // $(".card-title-0").html("<h5>" + "Date" + "<br>" + response.list[0].dt_txt + "</h5>" + "<br>" + "Tempeture: " + response.list[0].main.temp + "<br>" + "Humidity: " + response.list[0].main.humidity);
        // $(".card-title-1").html("<h5>" + "Date" + "<br>" + response.list[10].dt_txt + "</h5>" + "<br>" + "Tempeture: " + response.list[10].main.temp + "<br>" + "Humidity: " + response.list[10].main.humidity);
        // $(".card-title-2").html("<h5>" + "Date" + "<br>" + response.list[20].dt_txt + "</h5>" + "<br>" + "Tempeture: " + response.list[20].main.temp + "<br>" + "Humidity: " + response.list[20].main.humidity);
        // $(".card-title-3").html("<h5>" + "Date" + "<br>" + response.list[30].dt_txt + "</h5>" + "<br>" + "Tempeture: " + response.list[30].main.temp + "<br>" + "Humidity: " + response.list[30].main.humidity);
        // $(".card-title-4").html("<h5>" + "Date" + "<br>" + response.list[35].dt_txt + "</h5>" + "<br>" + "Tempeture: " + response.list[35].main.temp + "<br>" + "Humidity: " + response.list[35].main.humidity);
        /*$(".wind").html("<h1>" + response.city.name + " Current Weather Details</h1>" + response.list[0].temp + "<br>" + response.list[0].weather[0].description);
        /* $(".humidity").text("Humidity: " + response.main.humidity);*/
        /* $(".temp").text("Temperature (F) " + response.main.temp);*/



      });
    event.preventDefault();
  });
  $("#submit").on("click", function () {
    /*var APIKey = "166a433c57516f51dfab1f7edaed8413";*/
    var city = $("#search").val();
    // Here we are building the URL we need to query the database
    
    var queryURL2 = "https://api.openweathermap.org/data/2.5/weather?q=" + city + ",us&units=imperial&APPID=166a433c57516f51dfab1f7edaed8413";
    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
      url: queryURL2,
      method: "GET"
    })
      .then(function (response2) {
        console.log(response2)
        console.log(queryURL2)
        $(".wind").html("<h1>" + response2.name + " Current Weather Details</h1>" + response2.main.temp + "<br>" + response2.weather[0].description); 
      })
  })