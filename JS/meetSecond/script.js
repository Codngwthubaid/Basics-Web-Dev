// Function Example -

// Pre-Taken Values
// const numFirst = 23
// const numSecond = 89
// const numThird = 976
// const numFourth = 32
// const numFiveth = 343

//User-Provided Values 
const numFirst = parseInt(prompt("Enter first Number : ")) 
const numSecond = parseInt(prompt("Enter second Number : "))
const numThird = parseInt(prompt("Enter third Number : "))
const numFourth = parseInt(prompt("Enter fourth Number : "))
const numFiveth = parseInt(prompt("Enter fiveth Number : "))

function avg(numFirst, numSecond, numThird , numFourth , numFiveth) {
    let avgAdd = (numFirst+numSecond+numThird+numFourth+numFiveth)
    let avgDiv = (avgAdd/5)
    return avgDiv
}
const result = avg(numFirst, numSecond, numThird , numFourth , numFiveth)
console.log("Avg is :" ,result);

document.body.querySelector(".avg").innerHTML = `Avg is : ${result}`


// DOM
// By Class
let DOMclass = document.querySelector(".class").style.backgroundColor = "orange"
console.log(DOMclass);
// orr
const Class = document.getElementsByClassName("class")
console.log(Class);
// By Id
let DOMid = document.querySelector("#id").style.backgroundColor = "green"
console.log(DOMid);
// orr
const ID = document.getElementById("id")
console.log(ID);


// Listeners
let listener =  document.getElementById("btn").addEventListener("click",()=>{
    document.getElementById("btn").style.color = "red"
})

console.log(listener);
