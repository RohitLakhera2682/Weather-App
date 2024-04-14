
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd1cae0c122msh064f4c6f94a307ep19788ajsne37070e10c65',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
   cityN.innerHTML = city
   fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city,options)
    .then(response => response.json())
    .then((response) =>{
        console.log(response)
        
        
        temp.innerHTML = response.temp+"°C"
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like+"°C"
        humidity.innerHTML = response.humidity + "%"
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp+"°C"
        max_temp.innerHTML = response.max_temp+"°C"
        wind_speed.innerHTML = response.wind_speed + "Km/hr"
        wind_speed2.innerHTML = response.wind_speed 
        wind_degrees.innerHTML = response.wind_degrees +"°"
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    }
    ).catch(err => console.error(err));

}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")

// async function fetchData() {
//   try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }

// // Call the async function to fetch data
// fetchData();
