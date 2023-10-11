//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100     //Number
const scoreValue = 100.3  //Number

const isLoggedIn = false
const outsideTemp = null
let userEmail;   //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);   //false

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

//console.log(typeof anotherId);  //Symbol
console.log(typeof myObj)    //object
console.log(typeof myFunction)   //function
console.log(typeof null)   //object
console.log(typeof heros)   //object


// https://262.ecma-international.org/5.1/#sec-11.4.3