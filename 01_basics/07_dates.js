// Dates

let myDate = new Date();
// console.log(typeof myDate);   //object
// console.log(myDate);  //2023-12-06T16:46:26.079Z
// console.log(myDate.toString());  //Wed Dec 06 2023 16:54:26 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());   //Wed Dec 06 2023
// console.log(myDate.toLocaleString('en-IN', {timeZone : 'Asia/Kolkata'}));  // 6/12/2023, 10:20:07 pm
// console.log(myDate.toLocaleDateString());  //12/6/2023
// console.log(myDate.toLocaleTimeString('en-IN', {timeZone: 'Asia/Kolkata'}));   //10:20:07 pm

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})