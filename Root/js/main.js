


// var DateTime = luxon.DateTime
// var dataDate = new Date(1613066400 * 1000)
// console.log(dataDate.toDateString())


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
            
            $(".temp").html(`<p>${locData.name} <br/> ${Math.round(locData.main.temp)}&#x2109; </p>`)
          });
};
//<div>${locData.name}${Math.round(locData.main.temp)}</div>
//"http://openweathermap.org/img/wn/${locData.weather[0].icon}@2x.png


fetch("https://api.openweathermap.org/data/2.5/weather?q=London,us&units=imperial&APPID=166a433c57516f51dfab1f7edaed8413")
   .then(response => response.json())
   .then(today=>{
     console.log(today)
     $(".temp").html(`<div>${today.name}${Math.round(today.main.temp)}</div>`)
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
     $(".temp").html(`<div>${today.name}${Math.round(today.main.temp)}</div>`)
   })
})




