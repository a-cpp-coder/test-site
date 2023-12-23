/* Part 1 */
// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello World";
// alert("Hello")

// function multiply(num1, num2){
//     let result = num1 * num2;
//     return result;
// }

// multiply(5, 4);
// alert(multiply(2, 3));

// document.querySelector("html").addEventListener("click", function () {
//     alert("Oh, stop click on me!")
// })

// document.querySelector("html").addEventListener("click",  () => {
//     alert("Test lambda!")
// })

/* Part 2 */
const myImage = document.querySelector("img");

// onclick is an attribute of the object myImage, and is assigned to another object that is a callback fucntion
myImage.onclick = () => {   // excute the callback "lambda" function
    const mySrc = myImage.getAttribute("src")
    if (mySrc === "images/mpv-shot0001.jpg") {
        myImage.setAttribute("src", "images/firefox-dev.png")
    } else {
        myImage.setAttribute("src", "images/mpv-shot0001.jpg")
    }
}

/* Part 3 */
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

// // personalized greeting
function setUserName() {
    const myName = prompt("Please enter your name: test");
    if (!myName) {   //  if myName is null or empty string ""
        setUserName();// run setUserName() again from the  start, kind of recursion but, yeah, kind of expensive here, may do while better  
    } else {
        localStorage.setItem("name", myName);  // Web API storage: local and session
        myHeading.textContent = `This is personal, ${myName}`;
    }
}

// do-while

 // need to initialize the var 1st
//  let myName;
// function setUserName() {
//     // alert("test");
//     // let myName;
//     do {
//         // alert("test");
//         let myName = prompt("Please enter your name.");
//     } while(!myName)    // not work because the while does not see myName

//     localStorage.setItem("name", myName);  // Web API storage: local and session
//     myHeading.textContent = `This is personal, ${myName}`;
// }
// var myName;
// function setUserName() {
//     // alert("test");
    
//     do {
//         // alert("test");
//         let myName = prompt("Please enter your name.");
//     } while(!myName)    

//     localStorage.setItem("name", myName);  // Web API storage: local and session
//     myHeading.textContent = `This is personal, ${myName}`;
// }

if(!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
}