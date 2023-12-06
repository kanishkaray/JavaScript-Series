//Arrays in js

const arr = [1,2,3,4,5];
// console.log(arr);   //[ 1, 2, 3, 4, 5 ]
// console.log(typeof arr);   //object

const arr2 = new Array(10,11,122,15,67);
// console.log(arr2);   //[ 10, 11, 122, 15, 67 ]
// console.log(typeof arr2);   //object


//Array methods
arr.push(10);     //adds element at end
// console.log(arr);
arr.pop();     //removes element from end
// console.log(arr);

arr.unshift(110);   //adds element at front i.e at index 0
// console.log(arr);   //[ 110, 1, 2, 3, 4, 5 ]
arr.shift();     // removes element from front
// console.log(arr);  //[ 1, 2, 3, 4, 5 ]

// console.log(arr.includes(2));  //returns true if the element is present in the array and false if not present
// console.log(arr.indexOf(4));   //returns the index of element if present , otherwise returns -1 (if not present)

const newArr = arr.join();
// console.log(newArr);  // 1,2,3,4,5
// console.log(arr);  // [ 1, 2, 3, 4, 5 ]
// console.log(typeof newArr);  //string
const newArr2 = arr.join('+');
// console.log(newArr2);  //1+2+3+4+5

//Syntax : array.join(separator);
//separator (optional): The string used to separate the array elements in the resulting string. 
//If not specified, a comma is used as the default separator.



//slice() and splice()

// console.log(arr);     // [1, 2, 3, 4, 5]
const myArr = arr.slice(1,3);     // Syntax : array.slice(startIndex, endIndex);
// console.log(myArr);   // [2, 3]

const myArr2 = arr.splice(1,3);      // Syntax : array.splice(startIndex, deleteCount, item1, item2, ...);
//deleteCount -> no. of old array elements to be removed
//item1, item2,... -> elements to add to the array, beginning from startIndex
// console.log(myArr2);  // [2, 3, 4]
// console.log(arr);    // [1, 5]

// console.log(arr2);   // [ 10, 11, 122, 15, 67 ]
const splicedArr = arr2.splice(1, 3, 12, 13, 14, 15);
// console.log(splicedArr);   // [ 11, 122, 15 ]
// console.log(arr2);   // [ 10, 12, 13, 14, 15, 67 ]


//splice() modifies the original array by removing or replacing elements in place.
//slice() creates a new array as a shallow copy of a portion of the original array without modifying the original array.