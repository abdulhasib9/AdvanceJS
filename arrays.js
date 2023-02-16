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
