
var i = 0;
function sayHello(){
    counter.innerText = "Box clicked " + i + " times"
    i++;
}


var hellobutton = document.getElementById("button")
var counter = document.getElementById("text");

hellobutton.addEventListener('click', sayHello)