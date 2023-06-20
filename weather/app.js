import {getWeatherDetails} from './modules/InsertTable.js'
let PopUpDetailsContainer = document.getElementById("PopUpDetails");
let inputLocationContainer = document.getElementById("inputLocation");
let tableLocationContainer = document.getElementById("locationTable");
fetch("./components/inputLocation.html")
  .then((response) => response.text())
  .then((html) => {
    inputLocationContainer.innerHTML = html;
  })

fetch("./components/PopupDetails.html")
.then((response) => response.text())
.then((html) => {
  PopUpDetailsContainer.innerHTML = html;
}) 

fetch("./components/locationTable.html")
.then((response) => response.text())
.then((html) => {
  tableLocationContainer.innerHTML = html;
})

var dataArr=[];
document.getElementById("myForm")
let insert = document.getElementById("inputLocation");
insert.addEventListener("submit", (event) => {
  event.preventDefault();
  let loc=document.getElementById("locationInput").value;
  if(dataArr.includes(loc)){
    alert(`already Exists`)
  }
  else{
    
    dataArr.push(loc);
    getWeatherDetails(loc)
  }
  document.getElementById("myForm").reset();
})



// var map={};
// let insert = document.getElementById("inputLocation");
// document.getElementById("myForm")
// insert.addEventListener("submit", (event) => {
  

//   event.preventDefault();
//   let loc=document.getElementById("locationInput").value;
//   // console.log(place);
//   getWeatherDetails(loc)
//   // console.log(map)   
//   document.getElementById("myForm").reset();
// }); 

// let form = document.getElementById("inputLocation");
