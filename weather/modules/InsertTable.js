const openPopup = () => {
    let popup = document.getElementById("popup");
  let popupbg = document.getElementById("popupbg");
    popup.style.display = "block";
    popupbg.style.display = "block";
}
const closePopup = () => {
    let popup = document.getElementById("popup");
    let popupbg = document.getElementById("popupbg");
    popup.style.display = "none";
    popupbg.style.display = "none";
}

const loader = (isLoading) => {
    let loaderData = document.getElementById("loader");
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
export const getWeatherDetails = (loc) => {
    try {
        const API_KEY = "c7a9299a3d8da1d910da08bcffb48a3b"

        let url = `http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${API_KEY}`

        loader(true)
        fetch(url).then(response => response.json()).then(response => {
            loader(false)
            
            if(response.cod == 200){
                
                let temperature = response.main.temp - 273.15

                let humidity = response.main.humidity

                let locName = response.name

                console.log(locName)

                getData(temperature, humidity, locName)
            

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
    if(event.target == closeIcon){
        closePopup()
    }
})
function updateSerialNumbers(){
    let table=document.getElementById("table");
    let rows =table.getElementsByTagName("tr");
    // console.log(rows[0]);
    for(let i=1;i<rows.length;i++){
        let row=rows[i];
        let serialCell=row.cells[0];
        serialCell.innerHTML=i;
    }
    count=rows.length;
}

var count=1;
const getData=(temperature, humidity, locName)=>{

    let table=document.getElementById("table");
    let row=table.insertRow(-1);
    let cell0=row.insertCell(0);
    cell0.innerHTML=count;
    
    // let cell1=row.insertCell(1);
    // let inputcheckBox=document.createElement("input");
    // inputcheckBox.setAttribute("type", "checkbox");
    // inputcheckBox.setAttribute("name","checkbox");
    
    // cell1.appendChild(inputcheckBox);
    
    let cell2=row.insertCell(1);
    cell2.innerHTML=locName;
    let cell3=row.insertCell(2);
    cell3.innerHTML='<input type="button" value="Show">';
    cell3.addEventListener("click",()=>{
        showPopup(temperature, humidity, locName)
    })
    // cell3.addEventListener("click",getWeatherDetails)
    let cell4=row.insertCell(3);
    cell4.innerHTML='<input type="button" value="Delete">';
    
    cell4.addEventListener("click", function(){
        row.remove(cell0);
        updateSerialNumbers();
    }
    );
    

    count++;

}

