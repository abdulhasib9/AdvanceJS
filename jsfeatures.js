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