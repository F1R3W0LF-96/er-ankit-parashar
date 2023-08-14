import axios from "axios";
import React, { useEffect, useState } from "react";

const apiKey = "bcab616c646369b4ad952491a0fd8509";

function Weather() {
  const [city, setCity] = useState("mohali");
  const [searchValue, setSearchValue] = useState(true);

  useEffect(() => {
    if (searchValue) {
      getWeather();
    }
  }, [searchValue]);
  const search = () => {
    getWeather();
  };
  const getWeather = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      )
      .then((response) => {
        let weatherData = response.data;
        const { name } = weatherData;
        const { icon, description } = weatherData.weather[0];
        const { temp, humidity } = weatherData.main;
        const { speed } = weatherData.wind;

        const date = new Date(weatherData.dt * 1000); // Multiply by 1000 to convert to milliseconds
        const monthOptions = { month: "long" };
        const dayOptions = { day: "numeric", weekday: "long" };

        const formattedMonth = date.toLocaleDateString("en-US", monthOptions);
        const formattedDay = date.toLocaleDateString("en-US", dayOptions);

        document.querySelector(".weather-date").innerHTML =
          formattedMonth + " " + formattedDay;
        document.querySelector(".city").innerHTML = name;

        document.querySelector(".icon").src =
          "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "  °C";
        document.querySelector(".humidity").innerText = humidity;
        document.querySelector(".humidity").innerText =
          "Humidity : " + humidity + " %";
        document.querySelector(".wind").innerText =
          "Wind Speed : " + speed + " km/h";

        document.querySelector(".weather").classList.remove("loader");
        document.body.style.height = "100vh";
        document.body.style.backgroundImage =
          "url('https://source.unsplash.com/1600x900/?" + name + "')";
        setSearchValue(false);
      })
      .catch((err) => {
        console.log("error: " + err);
      });
  };

  const keyPresshandler = (e) => {
    if (e.keyCode == 13) {
      return false; // returning false will prevent the event from bubbling up.
    } else {
      return true;
    }
  };
  return (
    <div class="flex h-screen justify-center items-center">
      <div class="w-96">
        <div id="search" class="flex justify-center mb-4 rounded-md">
          <input
            type="text"
            class="search-bar px-5 py-3 rounded-l-lg w-full text-gray-800 placeholder-gray-500 focus:outline-none"
            placeholder="Search City..."
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => keyPresshandler(e)}
          />
          <button
            class="search-button rounded-r-lg bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 focus:outline-none"
            onClick={() => search()}
          >
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a4 4 0 11-8 0 4 4 0 018 0zm3.31 3.31a8 8 0 10-12.02 0m12.02 0l5 5"
              ></path>
            </svg>
          </button>
        </div>
        <div class="weather backdrop-blur-md rounded-lg shadow-lg p-6 flex flex-col items-center transition duration-150 ease-in-out">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <span class="city text-xl font-semibold mb-2 text-white">
                City Name
              </span>
              <span>
                <img class="icon h-100 w-100" src="" alt="Weather Icon" />
              </span>
            </div>

            <div class="weather-date text-xl font-semibold mb-2 text-white">
              Date
            </div>

            <div class="flex items-center space-x-2">
              {/* <img class="icon h-100 w-100" src="" alt="Weather Icon" /> */}
              <div class="description text-white"></div>
              <div class="temp text-blue-600 text-lg font-semibold"></div>
            </div>
          </div>
          <div class="flex-bottom mt-2">
            <div class="humidity text-white">
              Humidity: <span class="font-semibold">60%</span>
            </div>
            <div class="wind text-white ml-4">
              Wind: <span class="font-semibold">10 mph</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
