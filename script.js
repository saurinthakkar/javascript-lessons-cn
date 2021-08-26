// var a = 'a';

// if(a){
//     console.log("true")
// }
// else{
//     console.log("false")
// }

// var a = undefined;

// if(a > 0){
//     console.log("Positive")
// }
// else if(a<0){
//     console.log("Negative")
// }
// else{
//     console.log("Zero number")
// }

/*---Loops---*/

// var i =1;

// // while(i <=5){
// //     console.log(i)
// //     i++;

// // }

// do{
//     console.log(i)
//     i++
// }
// while(i<=5)

// var i,j;

// for(i =0,j=10 ; i<10,j<100;){
//     console.log(i)
// }

// var a;

// console.log(typeof(a));


/*---Function basics*/

// function showAlert(a,b,c){
//     console.log(a+b*c)

// }

// var c = showAlert(2,3)
// console.log(c)

/*---Variable Length Arguments*/

// function sum(a,b){
//     return a+b
// }

// var result = sum(4,5,9)
// console.log(result)

/*---Function Hoisting*/

// function hoistDemo() {
//     console.log(i);
//     var i=10;
// }

// hoistDemo();

/**---Variable hoisting */

// console.log(j);

// function hoistDemo() {
//     console.log(i);
//     var i=10;
// }

// // hoistDemo();

// var j = 100;

/*---Functions and scope*/

// var nameVar = "global"

// function scopeDemo(){
//     var nameVar = "function";
//     console.log(nameVar)
// }

// scopeDemo()
// console.log(nameVar);

/*2nd Example*/ 

// function c(){
//     console.log("Inside c")
// }

// function b(){
//     c()
//     console.log("Inside b")
// }
// function a(){
//     b();
//     console.log("Inside a")
// }

// a()
// console.log("global context")

/*---Function within Function*/

// function outer(){
//     var outerVar = 10;
//     function inner(){
//         var innerVar = 100;
//         console.log(outerVar)
//     }

//     inner()
//     console.log(innerVar)
// }

// // inner();
// outer();

/*2nd example for function within function*/

// var nameVar = "global"

// function outerVar(){
//     var nameVar = "outer";
//     function inner(){
//         var nameVar = "inner";
//         console.log(nameVar);
//     }
//     inner()
//     console.log(nameVar)
// }

// outerVar()
// console.log(nameVar)