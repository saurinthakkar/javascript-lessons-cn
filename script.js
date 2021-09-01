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