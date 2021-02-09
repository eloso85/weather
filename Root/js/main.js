var DateTime = luxon.DateTime



var dataDate = new Date(1613066400 * 1000)
console.log(dataDate.toDateString())


let luxDate = (input) => {
  const test = new Date(input * 1000);
  return test
}

const myLocation = ()=>{
  if (navigator.geolocation.getCurrentPosition(successCallback)){
    
  }
  
}
myLocation();

function successCallback(data){
  console.log(data)
  var lat = data.coords.latitude
  var lon = data.coords.longitude
  console.log(lat,lon)
  return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&APPID=166a433c57516f51dfab1f7edaed8413`)
          .then(response => response.json())
          .then(locData=>{
            console.log(locData)
            $(".today").html(`<div>${locData.name}${Math.round(locData.main.temp)}</div>`)
          })
}



fetch("https://api.openweathermap.org/data/2.5/weather?q=London,us&units=imperial&APPID=166a433c57516f51dfab1f7edaed8413")
   .then(response => response.json())
   .then(today=>{
     console.log(today)
     $(".today").html(`<div>${today.name}${Math.round(today.main.temp)}</div>`)
   })

$("#submit").on("click", () => {
  event.preventDefault();
  var city = $("#search").val();

  fetch("https://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + ",&cnt=7&us&units=imperial&APPID=166a433c57516f51dfab1f7edaed8413")
    .then(response => response.json())  // convert to json
    //print data to console
    .then(foreCast => {
     // console.log(foreCast)
      $(".forecast").html(`${foreCast.list.map(function (days) {
        //console.log(days)
        var dataDate = luxDate(days.dt)
        console.log(dataDate)
        return `
                  <div class="card text-center" style="width: 25rem;">
                      <div class="card-body">
                        <h5>${Math.round(days.temp.max) + "/" + Math.round(days.temp.min)}</h5>
                          <h5 class="card-title-0">${dataDate.toDateString()}</h5>
                            </div>
                                </div>`
      }).join("")}`);
    })
   .catch(err => console.log('Request Failed', err)); // Catch errors

   fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + ",us&units=imperial&APPID=166a433c57516f51dfab1f7edaed8413")
   .then(response => response.json())
   .then(today=>{
     console.log(today)
     $(".today").html(`<div>${today.name}${Math.round(today.main.temp)}</div>`)
   })
})




// $("#submit").on("click", function () {
//     /*var APIKey = "166a433c57516f51dfab1f7edaed8413";*/
//     var city = $("#search").val();
//     // Here we are building the URL we need to query the database
//     var queryURL = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + ",&cnt=7&us&units=imperial&APPID=166a433c57516f51dfab1f7edaed8413";
//     var queryURL2 = "https://api.openweathermap.org/data/2.5/weather?q=" + city + ",us&units=imperial&APPID=166a433c57516f51dfab1f7edaed8413";
//     // Here we run our AJAX call to the OpenWeatherMap API
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     })
//       // We store all of the retrieved data inside of an object called "response"
//       .then(function (response) {

//           console.log(response);


//         $(".container").html(`${response.list.map(function(days){
//           console.log(days)
//            var dataDate = luxDate(days.dt)
//           console.log(dataDate)
//           return`
//           <div class="card text-center" style="width: 25rem;">
//               <div class="card-body">
//                 <h5>${Math.round(days.temp.max) + "/" + Math.round(days.temp.min)}</h5>
//                   <h5 class="card-title-0">${dataDate.toDateString()}</h5>
//                     </div>
//                         </div>`



//         }).join("")}`);

//         });
//       event.preventDefault()
//   });
//   ;
  // $("#submit").on("click", function () {
  //   /*var APIKey = "166a433c57516f51dfab1f7edaed8413";*/
  //   var city = $("#search").val();
  //   // Here we are building the URL we need to query the database

  //   var queryURL2 = "https://api.openweathermap.org/data/2.5/weather?q=" + city + ",us&units=imperial&APPID=166a433c57516f51dfab1f7edaed8413";
  //   // Here we run our AJAX call to the OpenWeatherMap API
  //   $.ajax({
  //     url: queryURL2,
  //     method: "GET"
  //   })

  //     .then(function (response2) {
  //       console.log(response2.name)
  //       //console.log(queryURL2)
  //       $(".wind").html("<h1>" + response2.name + " Current Weather Details </h1>"); 
  //     })
  // })