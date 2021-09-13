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

/*---Function expression---*/

//Example-1 - Named function expression

// var factorial = function fact(n) {
//     var ans = 1;
//     for(var i = 1; i<=n ; i++){
//         ans = ans*i;
//     }
//     return ans;
// }

// console.log(factorial(5))
// console.log(factorial)
// console.log(fact(4))

//Example-2 -  Anonymous function expression

// var factorial2 = function(n) {
//     var ans = 1;
//     for(var i = 1; i<=n ; i++){
//         ans = ans*i;
//     }
//     return ans;
// }

// console.log(factorial)
// console.log(factorial2)

//Example -3 with recursion

// var factorial2 = function(n) {
//         var ans = 1;
//         for(var i = 1; i<=n ; i++){
//             ans = ans*i;
//         }
//         return ans;
// }

// var factorial = function fact(n) {
//     if (n == 0) {
//         return 1;
//     }

//     else n * fact (n-1)
// }

// console.log(factorial2(4));
// console.log(factorial(-1));

// console.log(factDeclar(5));
// console.log(factExp(7));

// function factDeclar(n){
//     var ans = 1;
//     for(var i = 1; i <=n ; i++){
//         ans = ans*i ;
//     }
//     return ans;
// }

// var factExp = function fact(n){
//     var ans = 1;
//     for(var i =1; i <= n;i++){
//         ans = ans*i;
//     }
//     return ans;
// }


//Functions as arguments

//Example-1

// var add = function (a, b) {
//     return a+b;
// }

// var subtract = function (a, b) {
//     return a-b;
// }

// var op = function (func) {
//     var x = 2;
//     var y = 3;
//     return func(x, y);
// }
// console.log(op(add));

//Example-2

// var fact = function factorial(n){
//     var ans = 1;
//     for(var i=1 ; i<=n ; i++){
//         ans =  ans * i;
//     }
//     return ans;
// }

// var ncr = function (n , r ,func){

//     return func(n) / (func(r) * func(n-r))
// }

// console.log(ncr(5 ,2 , fact))

/*Arrays*/

// var arr = [1,8,9,0,7]

// function print(element){
//     console.log(element)
// }

// arr.forEach(print)

/*---Objects---*/

var student = {
    "nameVar": 'Saurin',
    rollNo: 250,
    marks: 90,
    "2": 'thakkar'
};

// var proVar = 'rollNo'

// printProperty(student, proVar)

// function printProperty(obj, prop) {
//     console.log(obj[prop])

// }

// var obj = {
//     p1 : 100
// };


/*---Iterating over objects---*/

// for(var prop in student){
//     console.log(prop,student[prop])
// }

// var keys = Object.keys(student);
// console.log(keys)
// var keys1 = Object.getOwnPropertyNames(student);
// console.log(keys1)


// var student = {
//     name:"abc",
//     rollno:135,
//     marks:90,
//     address:{
//         city:"anand",
//         pincode:388120
//     }
// }


//Example -1 

// var obj1 = {};
// var obj2 = new Object();
// var obj3 = {};
// console.log(typeof obj1,typeof obj2,typeof obj3)
// console.log(obj1==obj2, obj1 == obj3);

//

//

// var arrVar = [20,30,40,50];

// var objVar = {
//     "0" : 20,
//     "1" : 30,
//     "2" : 40,
//     "3" : 50
// };

//SetTimeOut 

// function sayHello(){
//     console.log("Hello")
// }

// setTimeout(sayHello,2000)

//SetInterval

// var sec = 1;
// function sayHello(){
//     console.log("after",sec)
//     sec++;
// }

// setInterval(sayHello,1000)


// var sec = 1;
// function sayHello(){
//     console.log("after",sec)
//     sec++;
//     if(sec == 6){
//         clearInterval(id)
//     }
// }

// var id = setInterval (sayHello , 1000)
// console.log("Id:",id)

//Reverse Countdown timer

// var i = 10;
// function sayCount(){

//     console.log(i)
//     i--;
//     if(i === 0){
//         console.log("Time up")
//         clearInterval(id)
//     }
// }


// var id = setInterval(sayCount,1000)

// var obj1 = {};
// var obj2 = new Object();
// console.log(typeof obj1 , typeof obj2)

//DOM

//MCQ = 1
// function test() {
//     return this;
// }

// console.log(test() === window)

// var y = document.getElementById("one");
// y.style.color = "red";


// var x = document.querySelector("#myheading");
// y.innerText = "Hello brother";
// varHead.style.backgroundColor = 'red';

//Add event Listner


// function sayHello(){
//     alert("Hello")
// }

// function sayBye(){
//     alert("Bye")
// }

// var helloButton = document.getElementById('btn-2');


// helloButton.addEventListener('click',sayHello)
// helloButton.addEventListener('click',sayBye)

//Closures

//Example-1

// var var1 = 10;

// function outer(){
//     var b = 40;
//     console.log(b);
// }

// console.log(var1)

//Example-2

// var a =10;
// var b;
// function outer(){
//     var b = 30;
//     function inner(a){
//         var a = 30;
//         console.log(a++ ,b++)
//         }
//         console.log(a, ++b);
//         inner(a);
// }
// outer();
// console.log(a++,b++);

//File-1

// var nameVar = "File1";

// (function print(){
//     setTimeout (function(){
//         console.log(nameVar)
//     },1000)

// }) ();

// {

//     let nameVar = "File1";

//     setTimeout(function () {
//         console.log(nameVar)
//     }, 1000);

// }

//Closue Example-1

// var i=10;

// function outer(){
//     var j = 20;
//     console.log(i,j)
//     var inner = function(){
//         var k =30;
//         console.log(j,k)
//     }
//     return inner;
// }

// var inner = outer();
// inner();

//Closure Example-2

// var i=10;

// function outer(){
//     var j=20;
//     // console.log(i,j)
//     var inner = function(){
//         var k =30;
//         console.log(i,j,k)
//         k++;
//         j++;
//         i++;
//     }
//     return inner;
// }

// var inner = outer();
// inner();
// inner = outer();
// inner();

//Closure - Example -3

// var add = (function ( ) {
//     var counter = 0;
//     return function ( ) {
//          counter += 1; 
//          return counter;
//   }
//   })();    
//   console.log(add());
//   console.log(add());
//   console.log(add());

//Closure Example -4

// function test(){

//     for(let i =1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },1000)
//     }

//     // console.log("After for loop",i)

// }

// test()


var arr = new Array(6);
for (let i = 1; i <= 5; i++) {
    i++;
    // arr[i] = function () {
    arr[i] = function(){    
    console.log(i,arr[i])
    }
    i--;
}

  console.log(arr[3]())

// var functions = {
//     blah: function() { alert("blah"); },
//     foo: function() { console.log("foo"); }
// };

// functions.blah();

// functions["blah"]();

