var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var h3 = document.querySelector("#h3");
var body = document.querySelector("#gradient");


console.log(body);

color1.addEventListener("input", addColor);
color2.addEventListener("input", addColor);


function addColor(){
    body.style.background = "linear-gradient(to right, "+ color1.value +" , " + color2.value + ")";

    h3.textContent = "background: " body.style.background + ";";
}
