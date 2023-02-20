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