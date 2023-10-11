const name = "Kanishka"
const lastName = new String('Ray')

// console.log(name + " " + lastName);  //Less preferred
// console.log(`My name is ${name} ${lastName}`) //More preferred

// console.log(name.at(-5))   //5th character from last 
// // console.log(name.charAt(-1))   //charAt does not accepts negative index
// console.log(name.charAt(1)) 
// console.log(name.charAt()) //K   //default index 0
//console.log(name.at())  //default index 0

/*
    =>at() accepts negative index, while charAt() does not accept negative index
    =>if index is >= length of the string, at() returns undefined while charAt() returns empty string
*/

let fullName = name.concat(" ", lastName)
// console.log(fullName)  //Kanishka Ray
/* concat()
    =>syntax -> string1.concat(string2, string3, string4, .....)
    =>Returns new string 
    =>Does not modify the existing string
 */


let message = "Hello World"
// console.log(message.endsWith("World"))    //true  //checks if the message string ends with "World"
//console.log(message.endsWith("world"))    //false    //case sensitive
// console.log(message.startsWith("H"))  //true //checks if the message starts with "H"
// let str = "Hello"
// console.log(str.endsWith("o"))  //true
// console.log(str.endsWith("a")) //false


//includes()
// console.log(message.includes("World"));  //true
// console.log(message.includes("world"));  //false
// console.log(message.includes("Hi"))  //false
/*
    =>The includes() method returns true if a string contains a specified string.
    =>Otherwise it returns false.
    =>The includes() method is case sensitive.
*/

//indexOf() => returns the first index of a specified char or a string
//lastIndexOf() => returns the last index of a specified char or a string
let text = `My name is Kanishka Ray`
// console.log(text.indexOf('a'))   //4
// console.log(text.lastIndexOf('a'))   //21

//length() =>returns the length of a string
// console.log(text.length);   //23



//substr() => str.substr(startIndex, length)
//substring() => str.substring(startIndex, endIndex)
const newMessage = "Hello everyone!"
// console.log(newMessage.substr(1, 4))    //ello
// console.log(newMessage.substring(1, 4))  //ell   //endIndex is not inclusive



//string.split(separator, limit)
let textMessage = "How are you doing today?"
let arr = textMessage.split(" ")
// console.log(arr)    //[ 'How', 'are', 'you', 'doing', 'today?' ]
// console.log(textMessage.split("e"))     //[ 'How ar', ' you doing today?' ]
// console.log(textMessage.split(" ", 2))   //[ 'How', 'are' ]
/*
    =>The split() method splits a string into an array of substrings.
    =>The split() method returns the new array.
    =>The split() method does not change the original string.
*/


//string.slice(startIndex, endIndex)   //endIndex is not inclusive
// console.log(textMessage.slice(1,5))    //ow a
/*
    =>The slice() method extracts a part of a string.
    =>The slice() method returns the extracted part in a new string.
    =>The slice() method does not change the original string.
    =>A negative number selects from the end of the string.
*/



//string.replace(searchValue, newValue)    =>replaces the first occurence of searched value
//string.replaceAll(searchValue, newValue)  => replaces all occurences of searched value
let message1 = "I have a cricket bat and a cricket ball. I love playing cricket"
// console.log(message1.replace("cricket", "baseball"))    //I have a baseball bat and a cricket ball. I love playing cricket
// console.log(message1.replaceAll("cricket", "baseball"))    //I have a baseball bat and a baseball ball. I love playing baseball



//trim(), trimStart(), trimEnd()
let message2 = "         Hello World  !           "
// console.log(message2.trim())  //"Hello World  !"   //removes all the spaces at start and end
// console.log(message2.trimStart())  //"Hello World  !           "    //removes all the spaces from start
// console.log(message2.trimEnd()) //"         Hello World  !"     //removes all the spaces from end


let newName = "Ram"
// console.log(newName.toUpperCase())  //RAM
// console.log(newName.toLowerCase())  //ram
// console.log(newName)  //Ram