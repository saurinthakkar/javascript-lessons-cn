// window.alert("Hello")

// var outerDiv = document.getElementById("outer")

// outerDiv.addEventListener('mouseover',function(){console.log('Mouse over')})
// outerDiv.addEventListener('mouseout',function(){console.log('Mouse out')})

var searchInput = document.getElementById('search')

// searchInput.addEventListener('keydown',function(){console.log('Key Pressed')})

searchInput.addEventListener('keydown',function(e){console.log('key down',e.code)})