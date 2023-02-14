console.log("--------------------------------- Booleans --------------------------------")
//True or False
let isLogin = true;
let gameOver = false;
let isDied =true;

console.log("is login + "+isLogin)
console.log("is Game Over + "+gameOver)
console.log("is Died + "+isDied)

console.log("--------------------------------- Strings --------------------------------")
let firstName ="abdul hasib"
let lastName ='yousufzai'
console.log(firstName)
console.log(lastName)
let fullName = firstName+" "+lastName
console.log(fullName)

let fullNameLength = fullName.length
console.log("Full Name length: "+fullNameLength)
console.log(fullName[0])
console.log(fullName[8])

console.log("--------------------------------- String Methods --------------------------------")
console.log(fullName.toUpperCase())
console.log(fullName.toLowerCase())
console.log(fullName.trim())
console.log(firstName.toUpperCase().trim())

let text ="my dummy text "
let indexOfDummy = text.indexOf("dummy")
console.log(indexOfDummy)

//slice method
let textSlice = text.slice(1)
console.log("sliced text"+textSlice)
let textSlicedByIndex = text.slice(0,5)
console.log("sliced by index"+textSlicedByIndex)

//replaced method
let newText = text.replace("dummy","New")
console.log("New Text :"+newText)

//String themplate characters
console.log(`I amd ${3+43}`)
let animal ="dog";
let sound ="whoa whao"
console.log(`${animal.toUpperCase()} + ${sound}`);

