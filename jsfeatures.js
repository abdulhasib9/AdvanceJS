console.log("------------------------------------ Spread in Array Literal --------------------------------")
const animals1= ['fish','octopus']
const animals2 =['dog','cat']
let animalsList = [...animals1,...animals2]
console.log(animalsList)

let animals1Copy = [...animals1]
console.log(animals1)
console.log(animals1Copy)

let  pets ={
    type: "huskey",
    ispet: true
}

let spreadPets ={
    ...pets,
    isAlive:true
}
console.log(spreadPets)

let randoms = [..."Hello World".toUpperCase(),{...spreadPets}]
console.log(randoms)


//arguments objects
function sum(one,two){
    let argArray = [...arguments]
    console.log(arguments)
console.log(...arguments)
let sum = argArray.reduce((c,v)=>{return c+v})
console.log(sum)
}
sum(12,43,3,44,3)

//arguments objects not available in arrow functions

//rest parameters
