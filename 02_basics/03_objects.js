//singleton


//object literals
const mySym = Symbol("key1")
const JsUser = {
    name: "Kanishka",
    "full name" : "Kanishka Ray",
    age: 24,
    location: "India",
    email: "abcdef@gmail.com",
    [mySym]: "mykey1",       //for symbol, we write the key inside []
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])      //for symbol we don't write the key inside ""

JsUser.email = "kanishka@chatgpt.com"
// console.log(JsUser.email)
// console.log(JsUser)

/*
Object.freeze(JsUser)  //Prevents the modification of existing property attributes and values of the object
                      // and prevents the addition of new properties.
JsUser.email = "kanishka@email.com"     //change of email of the JsUser object not possible
console.log(JsUser)
*/

JsUser.greeting = function(){
    console.log("Hello World")
}
JsUser.greeting()

JsUser.greetingTwo = function(){
    console.log(`Hello, ${this.name}`)
}
JsUser.greetingTwo()