// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


console.log("2" > 1);     //2 > 1 => true
console.log("02" > 1);     // "02" is converted to 2 => 2 > 1 => true

/*
Avoid this type of conversions

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

*/

// === //checks for values as well as datatypes

console.log("2" === 2);    //false