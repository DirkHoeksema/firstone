var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".button");



// css pakt het lege H3 element
// color1 is de input in HTML voor color 1
// color2 is de input in HTML voor color 2
// body is het id Gradient - wat dus in HTML staat voor de Body Background.
// Background heeft in CSS de volgende standaardwaarde; 
// background: linear-gradient(to right, red , yellow);



function setGradient (){
	body.style.background =
	"linear-gradient(to right,"+ color1.value + "," + color2.value + ")";
	
	css.textContent = body.style.background + ";" ;
}


// display current background

body.onload = setGradient;



// deze functie pakt dus de body style en gebruikt hiervor de twee input values -
// weet dus alleen niet waarvoor die "," er bij moet en het niet gewoon alleen een , is

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click",function(){
	

})

// Hierboven dus dan de twee eventlisteners welke reageren/luisteren op wat er gebeurd op de site

