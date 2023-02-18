console.log("--------------------------------- Arrays --------------------------------")
let myCollection = ["hasib",32,4,false,NaN]
console.log(myCollection)
console.log(myCollection[0])
let newArray = new Array();
console.log(newArray.length);

//modifiying array 
let shoppinglist = ["cheese","meat","ice-cream"]
shoppinglist[1]="lamb"
console.log(shoppinglist)
shoppinglist[shoppinglist.length]="new Item"
console.log(shoppinglist)

console.log("--------------------------------- Push and POP methods --------------------------------")
let animals =["dog"]
animals.push("cat")
console.log(animals);
animals.pop() //remove the last element
console.log(animals); 
console.log("--------------------------------- shift and unshift methods --------------------------------")
let test=[23,54,232,44,"hello"]
console.log(test);
test.unshift("Hello")
console.log(test);
test.shift();
console.log(test);
console.log("--------------------------------- More array methods --------------------------------")
let fruits = ["banana","mango"]
let vegi =["spanich","cilantro"]
let fruitvegi = fruits.concat(vegi)
console.log(fruitvegi);

//include and indexof
let ingredients =["fish","shrimp","lamb"]
console.log(ingredients.includes("fish"));
console.log(ingredients.includes("fish",1))

console.log(ingredients.indexOf("shrimp"));

//join and reverse
console.log(ingredients.reverse());
//join join all array elements together
console.log(ingredients.join());


//slice
let animals2 = ["fish","whale","dog","goat","wolf"]
let swimmers = animals2.slice(0,2);
console.log(swimmers)
let reverseslice = animals.slice(-3)
console.log(reverseslice);
let copy = animals2.slice();
console.log(copy);

//splice method
//splice will delete and add items at any place in array 
animals2.splice(1,0,"new from splice method")
console.log(animals2);

console.log("--------------------------------- sorting array  --------------------------------")

let nums =[1,3,45,1,2,43,221]
console.log(nums.sort()); //sort arrays as string litterals

//const arrays
let color =["blue"]
color.push("Red")

//color =["fodd"] ->this will throw the error 

console.log("--------------------------------- Nested Arrays  --------------------------------")
const colors =[["blue","light blue"],["pink","lightpink"]]
console.log(colors[1][1]);