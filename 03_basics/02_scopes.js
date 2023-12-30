//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);    //out of scope
// console.log(c);


function one(){
    let username = "kanishka"

    function two(){
        let email = "sample@email.com"
        console.log(username)
    }
    // console.log(email)  //out of scope

    two()
}
// one()


if (true) {
    const username = "abcd"
    if (username === "abcd") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);  //out of scope
}
// console.log(username);  //out of scope



//+++++++++++  interesting ++++++++++++++++++

//hoisting

console.log(addOne(4))

function addOne(num){
    return num + 1
}


//addTwo(5)   //ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}