export const showPopup = (temp,hum,ln) => {
    let locationName = document.getElementById("location")
    let temperature = document.getElementById("temperature")
    let humidity = document.getElementById("humidity")

    locationName.innerHTML = ln
    temperature.innerHTML = `Temperature: ${temp.toFixed(2)}°C`
    humidity.innerHTML = `Humidity: ${hum}%`

    openPopup()

}