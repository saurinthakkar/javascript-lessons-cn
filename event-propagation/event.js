//window.location.replace("https://www.wikipedia.org");



 innerDiv = document.getElementById('inner')
var outerDiv = document.getElementById('outer')

innerDiv.addEventListener('click',function(event){
    "use strict"
    demo =100;
   
    console.log('Click inner div')
    event.stopPropagation()})
outerDiv.addEventListener('click',function(){console.log('Click outer div')})
document.addEventListener('click',function(){console.log('Document is clicked')})
