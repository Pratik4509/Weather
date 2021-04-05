let weather = {
  "apikey": "8df5e5a1fe5f40b347a5a1533843d1d2",
  fetchWeather: function(city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q="
      + city
      + "&units=metric&appid="
      + this.apikey

    ).then((response) => response.json())
     .then((data) => this.displayWeather(data));
  },
  displayWeather: function(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    const { country } = data.sys;
    console.log(name,temp,description,speed);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".country").innerText = country;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText ="Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText ="Wind Speed: " + speed + "km/h";
    document.querySelector(".weather").classList.remove("loading");
    //document.body.style.backgroundImage = "url('https://source.unsplash.com/1920x1080/?" + name +"')";


  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  }
};

document
  .querySelector(".search button").addEventListener("click", function() {
   weather.search();
 });

  document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if (event.key == "Enter") {
      weather.search();
    }
  });

  weather.fetchWeather("Mumbai");
