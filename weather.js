
const api = {
     key: '10c9febc354435ffc3d32e3a73e7e009',
     Url: "https://api.openweathermap.org/data/2.5/"
}
let obHavo;

$(document).ready(() => {

     function Fetch(query) { fetch(`${api.Url}weather?q=${query}&unity=metric&APPID=${api.key}`) 
          .then(res => res.json())
          .then(data => {
               JoyJoyiga(data);
          })
     }

     $('.search-box').keypress(function(event) {
          let query = $(this).val();
          if(event.which == 13) {
               Fetch(query);
          }
     })

     function JoyJoyiga(data) {
          console.log(data);
          let now = new Date();
          $(".city").text(`${data.name}, ${data.sys.country}`);
          $(".date").text(`${now.getFullYear()}, ${now.getMonth()}, ${now.getDate()}`);
          $(".temp").text(`${Math.round(data.main.temp - 273.15)}°C`);
          $(".weather").text(`${data.weather[0].main}`);
          $(`.hi-low`).text(`${Math.round(data.main.temp_min - 273.15)}°C / ${Math.round(data.main.temp_max - 273.15)}°C`);
     }
})
