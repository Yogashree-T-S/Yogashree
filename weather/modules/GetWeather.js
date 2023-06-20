import { loader } from "./Loader.js"
import {showPopup} from "./ShowPopUp.js"

const getWeatherDetails = () => {
    try {
        let locationInput = document.getElementById('locationInput')
        let locationName = locationInput.value

        const API_KEY = "c7a9299a3d8da1d910da08bcffb48a3b"

        let url = `http://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=${API_KEY}`

        loader(true)
        fetch(url).then(response => response.json()).then(response => {
            loader(false)
            if(response.cod == 200){
                let temperature = response.main.temp - 273.15

                let humidity = response.main.humidity

                let locName = response.name

                showPopup(temperature, humidity, locName)

            }else{
                alert("No Location found")
            }

        }).catch(error => {
            loader(false)
            alert(`API Error: ${error.message}`)
        });


    } catch (error) {
        alert(`getWeatherDetails Error: ${error.message}`)
    }
}

