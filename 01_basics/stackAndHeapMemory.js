//stack memory -> primitive datatypes
//heap memory -> non-primitive datatypes

let name1 = "abcd"       //Primitive datatype
let name2 = name1        //pass by value

name1 = "pqrs"

console.log(name1, name2)  //pqrs abcd


let obj1 = {                       //Non-primitive datatype 
    email: "hello@gmail.com",
    name: "hello"
}

let obj2 = obj1          //Pass by reference

obj2.email = "abcd@gmail.com"

console.log(obj1.email, obj2.email)   //abcd@gmail.com    abcd@gmail.com


