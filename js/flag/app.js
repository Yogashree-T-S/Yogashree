const searchInput=document.querySelector("Box")
const loadCountryAPI = () =>{
    // fetch url of rest country from website
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
//country => getCountry(country)
// displaying all countries
const displayCountries = countries =>{
    // console.log(countries);
    const countriesHTML = countries.map(function(country){
        return getCountry(country)
    });
    // displaying div to html
    //console.log(countriesHTML)
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}

// get data and set it to html
const getCountry = (country) =>{
    
    // let pop=country.population
    // let reg=country.region
    // let cap=country.capital
     //console.log(country)
    // showPopup(pop,reg,cap)
     //showPopup(country)
    return `
        <div class="country-div">
            <img src="${country.flags.png}" onclick="openPopup()">
            <h2>${country.name.common}</h2>
            <div id="popup" class="popup">
                <span id="closeIcon">&times;</span>
                <div id="arrange">
                    <div>
                        <img src="${country.flags.png}">
                    </div>
                    <div>
                        <h4>Population: ${country.population}</h4>
                        <h4>Region: ${country.region}</h4>
                        <h4>Capital: ${country.capital}</h4>
                    </div>
                </div>
            </div>
        </div>
        
    ` 
    
}
// <script>showPopup(country)
// console.log("sssssssss")</script>
// const showPopup = (country) => {
//     console.log(country)
//     openPopup()
    
//     return `
//         <h4>Population: ${country.population}</h4>
//         <h4>Regoin: ${country.region}</h4>
//         <h4>Capital: ${country.capital}</h4>`
    
    
//     // let Population = document.getElementById("Population")
//     // let Region = document.getElementById("Region")
//     // let Capital = document.getElementById("Capital")
    
//     // Population.innerHTML = pop
//     // Region.innerHTML = reg
//     // Capital.innerHTML = cap
    
    

// }
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
// call the funtion to get output in console
loadCountryAPI()

window.addEventListener("click",(event) => {
    console.log(event.target)
    if(event.target == popupbg){
        console.log("close icon clicked")
        closePopup()
    }
})

searchInput.addEventListener('input', (ev) => {
    const filteredCountries = allCountries.filter(country => country.name.toLowerCase().includes(ev.target.renderCountries(filteredCountries)))
})
// const showPopup=(country)=>{
//     loader(true)
//     let Population = document.getElementById("Population")
//  let Region = document.getElementById("Region")
//  let Capital = document.getElementById("Capital")
//  Population.innerHTML = country.population
//  Region.innerHTML = country.region
//  Capital.innerHTML = country.capital
//  //console.log(Capital)
//  loader(false)

// }