const apiKey="85e39f20737a209830fd8d75cccfd4f7";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response= await fetch (apiUrl + city + `&appid=${apiKey}`);
    if(response.status== 404){
   document.querySelector(".error").style.display="block";
   document.querySelector(".weather").style.display="none";
    }else{
        let data =await  response.json();
        console.log(data);
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + " °C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
        document.querySelector(".w-type").innerHTML=data.weather[0].main;
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/cloudy (2).png";
        } else if(data.weather[0].main == "Clear"  ){
            weatherIcon.src = "images/clear.png";
    
        }else if (data.weather[0].main == "Smoke"  ){
            weatherIcon.src = "images/smoke.png";
    
        }else if (data.weather[0].main == "Haze"  ){
            weatherIcon.src = "images/haze.png";
    
        }else if (data.weather[0].main == "Snow"  ){
            weatherIcon.src = "images/snow.png";
    
        }else if (data.weather[0].main == "Rain"  ){
            weatherIcon.src = "images/cloudy.png";
    
        } else if (data.weather[0].main == "Mist"  ){
            weatherIcon.src = "images/mist.png";
    
        }
        else if (data.weather[0].main == "Drizzle"  ){
            weatherIcon.src = "images/drizzle.png";
    
        }
   document.querySelector(".error").style.display="none";

        document.querySelector(".weather").style.display="block";
    }
  
}

searchBtn.addEventListener('click' , ( )=>{
    checkWeather(searchBox.value);

})