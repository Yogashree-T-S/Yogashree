let popup = document.getElementById("popup");
let popupbg = document.getElementById("popupbg");

let loaderData = document.getElementById("loader");

const openPopup = () => {
    popup.style.display = "block";
    popupbg.style.display = "block";
}
const closePopup = () => {
    popup.style.display = "none";
    popupbg.style.display = "none";
}

const loader = (isLoading) => {
    if(isLoading) {
        loaderData.style.display = "block";
    }else{
        loaderData.style.display = "none";
    }

}
const showPopup = (temp,hum,ln) => {
    let locationName = document.getElementById("location")
    let temperature = document.getElementById("temperature")
    let humidity = document.getElementById("humidity")

    locationName.innerHTML = ln
    temperature.innerHTML = `Temperature: ${temp.toFixed(2)}°C`
    humidity.innerHTML = `Humidity: ${hum}%`

    openPopup()

}
const getWeatherDetails = () => {
    try {
        let locationInput = document.getElementById('locationName')
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

window.addEventListener("click",(event) => {
    if(event.target == popupbg){
        closePopup()
    }
})