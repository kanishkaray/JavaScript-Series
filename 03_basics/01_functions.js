function printName(){
    console.log("kanishka")
}
//printName();

function addNumbers(num1, num2){
    return num1 + num2
}
// console.log(addNumbers(3,4))

function calculateCartPrice(...numbers){
    let price = 0;
    for(let i=0; i<numbers.length; i++) price += numbers[i];

    return price;
}
// console.log(calculateCartPrice(1,3,5,7,9))

function print(num1, num2, ...arr){
    console.log(num1)  //1
    console.log(num2)  //2
    console.log(arr)   //[ 3, 4, 5, 6 ]
}
// print(1,2,3,4,5,6)


const user = {
    id : "123abc",
    username : "kanishka"
}
function printUserDetails(anyUser){
    console.log(`Username is ${anyUser.username} and id is ${anyUser.id}`);
}
//printUserDetails(user)
// printUserDetails({username: "abcxyz", id: "567gjsej"})


const arr = [100,200,300,400];
function getSecondValue(anyArray){
    return anyArray[1]
}
// console.log(getSecondValue(arr));
// console.log(getSecondValue([1,2,3,4,5]));