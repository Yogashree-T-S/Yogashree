const form = document.querySelector("form");
const sab1 = document.querySelector(".box1");
const sab2 = document.querySelector(".sab");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const mail=document.getElementById("email").value;
    const myArr=mail.split("");
    
    //(myArr.slice((myArr.indexOf(".")),myArr.length)).toString()
    let company=mail.substring(myArr.indexOf("."),myArr.length);
    //console.log(company);
    if(myArr.includes("@") && company==".com") {     
        sab1.classList.add("hide");
        sab2.classList.remove("hide");  
    }
    else{
        
        var input=document.getElementById("email");
        var err=document.getElementById("error");
        input.style.backgroundColor="pink";
        input.style.color="red";
        input.style.borderColor="red";
        //console.log(err);
        err.style.display="inline";
        // form.classList.remove("hide");
    }
    // console.log(myArr.indexOf("@"));
    document.getElementById("email").value="";
})
window.addEventListener("click",(event) => {
    if(event.target == email){
        var input=document.getElementById("email");
        var err=document.getElementById("error");
        input.style.backgroundColor="white";
        input.style.color="black";
        input.style.borderColor="rgba(130, 127, 127, 0.847)";
        //console.log(err);
        err.style.display="none";
    }
})
let sab3 = document.getElementById("back")
sab3.addEventListener("click", (e) => {
    sab1.classList.remove("hide");
    sab2.classList.add("hide");
})