const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros);
// console.log(marvel_heros);   //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]);   // flash
marvel_heros.pop();

const allHeroes = marvel_heros.concat(dc_heros);
// console.log(allHeroes);   // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const allNewHeroes = [...marvel_heros, ...dc_heros];
// console.log(allNewHeroes);    // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


const anotherArray = [1,2,[3,4],6,7,[3,[8,9]]];
const anotherArray2 = anotherArray.flat(1);
// console.log(anotherArray2);  // [ 1, 2, 3, 4, 6, 7, 3, [ 8, 9 ] ]
const anotherArray3 = anotherArray.flat(Infinity);
// console.log(anotherArray3);  // [ 1, 2, 3, 4, 6, 7, 3, 8, 9 ]

//Syntax : const newArray = array.flat([depth]);
//depth (optional): The depth level specifying how deep a nested array structure should be flattened. The default is 1.


// console.log(Array.isArray("Kanishka"));   //false   //checks whether a given value is an array or not
// console.log(Array.isArray(anotherArray)); //true


// console.log(Array.from("Kanishka"));  // [ 'K', 'a', 'n', 'i', 's', 'h', 'k', 'a' ]
const num = [1,2,3,4];
// console.log(Array.from(num, x => x*x));    //[ 1, 4, 9, 16 ]

// Syntax : Array.from(arrayLike, mapFn, thisArg);
// arrayLike: The array-like or iterable object to convert to an array.
// mapFn (optional): A map function to call on every element of the array before returning the new array.
// thisArg (optional): Value to use as this when executing mapFn.

// console.log(Array.from({name : "Kanishka"}));   //[]   //interesting case


let score1 = 100, score2 = 200, score3 = 300;
console.log(Array.of(score1, score2, score3));  //[ 100, 200, 300 ]

