// const user = new Object()

const user = {}
user.name = "Kanishka"
user.email = "myemail@gmail.com"
user.age = 20
user.isLoggedIn = false
// console.log(user)

const regularUser = {
    id : "123abc",
    fullname : {
        userfullname : {
            firstname : "Kanishka",
            lastname : "Ray"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1:"a", 2:"b", 3:"c"}
const obj2 = {4:"a", 5:"c", 6:"e"}
const obj3 = {7:"t", 2:"a", 9:"g"}

// console.log({obj1, obj2})  
/*{
    obj1: { '1': 'a', '2': 'b', '3': 'c' },
    obj2: { '4': 'a', '5': 'c', '6': 'e' }
  }*/

const obj4 = Object.assign({}, obj1, obj2, obj3)       //Obj.assign(targetObj, sourceObj1, sourceObj2, ...)
// console.log(obj4)  //{'1': 'a','2': 'a','3': 'c','4': 'a','5': 'c','6': 'e','7': 't','9': 'g'}

const obj5 = {...obj1, ...obj2, ...obj3}   //rest operator
// console.log(obj5)   //{'1': 'a','2': 'a','3': 'c','4': 'a','5': 'c','6': 'e','7': 't','9': 'g'}



const customer = [
    {
        id : 1,
        email: "k@gmail.com"
    },
    {
        id : 2,
        email: "t@gmail.com"
    },
    {
        id : 3,
        email: "hello@gmail.com"
    }
]

// console.log(customer[1].email)  //t@gmail.com

//console.log(user)   //{ name: 'Kanishka', email: 'myemail@gmail.com', age: 20, isLoggedIn: false }

//console.log(Object.keys(user))  //returns an array of keys of the given object  //[ 'name', 'email', 'age', 'isLoggedIn' ]

//console.log(Object.values(user))  //returns an array of values of the given object   //[ 'Kanishka', 'myemail@gmail.com', 20, false ]

//console.log(Object.entries(user))  //returns an array of key,value pair  
//[ [ 'name', 'Kanishka' ], [ 'email', 'myemail@gmail.com' ], [ 'age', 20 ], [ 'isLoggedIn', false ] ]



const course = {
    courseName : "javascript-series",
    coursePrice : 0,
    courseInstructor : "abcd"
}

const {courseInstructor : instructor} = course

console.log(instructor)  //abcd




// {
//     "name": "xyz",
//     "coursename": "js-series",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]




