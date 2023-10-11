"use strict";  // treat all Js code as new version

//alert(3+3)  // we are using nodejs, not browser

let name = "Kanishka"
let age = 24
let isLoggedIn = true
let city;

//Primitive datatypes
//number
//bigInt
//string => ""
//boolean =>true/false
//undefined
//null => standalone value
//symbol => unique

console.log(typeof null)  //object
console.log(typeof undefined)  //undefined

//Non Primitive datatype
//Object

let arr = [1,23,4,5]
console.log(typeof arr)  //object

let obj = {
    name: "Kanishka",
    age: 24
}

console.log(typeof obj)