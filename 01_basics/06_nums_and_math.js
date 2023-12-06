const score = 100;
// console.log(typeof score);  //number
const balance = new Number(150);
//console.log(balance);      // [Number : 150]
//console.log(typeof balance);   //object

//console.log(balance.toString());   //convert to string

const price = 199.99
//Number.toFixed(digit)
//The number of digits to appear after the decimal point; 
//should be a value between 0 and 100, inclusive. If this argument is omitted, it is treated as 0.
// console.log(price.toFixed());  //200
// console.log(price.toFixed(1));  //200.0
// console.log(price.toFixed(2));  //199.99

const num1 = 100;
const num2 = 0.004;
const num3 = 1.003e5;
//Number.toPrecision(digit)
//digit -> An integer specifying the number of significant digits.
//console.log(num1.toPrecision(4), num2.toPrecision(4), num3.toPrecision());    //100.0, 0.004000 100300

const accountBalance = 100000000;
//console.log(accountBalance.toLocaleString());   //100,000,000     // as in US-english locale
//console.log(accountBalance.toLocaleString('en-IN'));    //10,00,00,000   //Indian-english locale


//++++++++++++++++++++++   Maths   ++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.round(4.3));   //4
// console.log(Math.round(4.5));   //5
// console.log(Math.ceil(4.3));    //5
// console.log(Math.floor(4.3));   //4
// console.log(Math.max(10,21,13,14));  //21
// console.log(Math.min(10,21,13,14));  //10
// console.log(Math.abs(-3.4));    //3.4

//console.log(Math.random());   //returns random floating-point number between 0(inclusive) to 1(exclusive)
// console.log(Math.floor(Math.random() * 10) + 1);  //returns random number between 1 to 10

const max = 20;
const min = 10;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);     //Returns random number between max and min
