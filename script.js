
function testy() {
  document.getElementById("test").innerHTML= "Hello class";
}

function increaseText() {
  document.getElementById("lorem").style.fontSize="70px"
}

function hideElement () {
  document.getElementById("hide").style.display= "none"
}

// its important to put letters in a String, and numbers without strings
// three ways to declare variables are var, let, and const

// var firstName= "LANRE"
// console.log(firstName)

// How to create variables
// var x = 10;
// var y = 5;
// let z = 0;

// javascript operators--arithmetic
//  +, -, *, /

// let a = 5;
// let b = 10;
// c = a / b;
// console.log (c)

// other types of javascript operators

// below is an example of exponential operator
// let c = 5;
// let d = c **2;
// console.log(d)


// below is an example of incremental operator
// let p = 5;
// p++;
// let q = p;
// console.log(q)


// below is an example of decremental operator
// let p = 5;
// p--;
// let q =p;
// console.log (q)


// below is an example of modulus operator
// let x = 7;
// let y = 3;
// c = x % y;
// console.log (c)

let firstName = "Adetutu";
let lastName = "Shola";
let state = "Anambra"

// alert (lastName)

// let resp = firstName + " " + lastName;
// let resp = "Hi, my name is " + firstName + "  " + lastName;
// console.log(resp)

// template literals
let resp = `Hi, my name is $ {firstName} $ {lastName} and i am from $ {state}`;
console.log (resp)

// alert(resp);

// comparison operators
// the first operator which is the double equals to (==) checks for value alone
// the second operator which is the tripple equals to(===) checks for both values and data types
// == & ===

let x = 10;

console.log(x==10);
console.log(x==15);
console.log(x== "10");

let y = 50.5;
console.log (y === 50.5);
console.log (y == 50);
console.log (y === "50.5");

// not operator(!)
console.log (!(5 > 30))
// greater than and less than signs
// >,<, >=, <=
console.log(2 < 20);
console.log (5 > 100);
console.log(5 >=5);
console.log(50 <=50);

// logical operator
// AND (&&)
// OR (||)
// Not (!)

let firstNo = 5;
let secNo = 40;

// (<) less than sign
// (>) greater than sign

console.log ( "hello", firstNo < 50 && secNo < 60);

// OR (||)
console.log ('test', firstNo < 50 || secNo > 100);

// Not (!) negates an expression
let loginUser = true;
console.log ("label", !loginUser)

// conditioners
// If statement
if (5 > 0){
console.log ('good')
} 
else{
  console.log('bad')
}


let age = 12;
let message ;

if(age >= 8){
message = 'citizen';
}
else {
  message = 'underage'
}
console.log('message', message);

// alternative to if (ternary operator)
age >=8 ? (message = 'citizen') : (message = 'underage');
console.log('yellow', message);





 let incomeA = 3000;
 let incomeB = 500;

 if(incomeA > incomeB) {
  console.log ('A wins')
 }

//  else
if (incomeA < incomeB) {
  console.log ('B wins');
}
else{
  console.log ('incomeA wins');
}

// else if
if (incomeA < incomeB){
  console.log('Adetutu wins');
}
else if(incomeB === incomeA)
{console.log('lanre wins');
}
else{console.log ('charles wins')
}

// checking length of strings
let names = 'Tobi Daniels';
let place = 'Oyo';

let myDetails = `My names are $ {names} and i live in $ {place}`;
console.log(myDetails);
console.log(myDetails.length);









