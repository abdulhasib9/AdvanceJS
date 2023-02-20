const numbers =[23,45,32,34,53]
numbers.forEach(element => {
    console.log(element)
});

console.log("foreach with external function");
function custom(x){
    console.log(x)
}
numbers.forEach(custom)


//map function
const doubleNumbers = numbers.map(function (num){
    return num*2;
})
console.log(doubleNumbers)

let words = ["asap","brb","lmk"]
let wordsUpper = words.map(function(word){
    return word.toUpperCase().split("").join(".")
})
console.log(wordsUpper)

console.log("------------------------------ Arrow Functions -----------------------------------")

const arrowDemo = (x)=>{
    return x*4
}

console.log(arrowDemo(3))

//implicit return
const squar = x=>x*x
console.log(squar(3))

console.log("------------------------------ Array.Find Method  -----------------------------------")

const movies =[
    "spider man",
    "iron man",
    "venom",
    "bat man"
]

let isHaveMan = movies.find((m)=>{
    return m.includes("man")
})
//find stops when the first match is found
console.log(isHaveMan)

console.log("------------------------------ Array.filter method  -----------------------------------")

const containsMan = movies.filter(x=>x.includes("man"))
console.log(containsMan)

console.log("------------------------------ Some and Every method  -----------------------------------")

const all3lets = movies.every(x=>x.length===3)
console.log(all3lets)

const some3lets = movies.some(x=>x.length===3)
console.log(some3lets)