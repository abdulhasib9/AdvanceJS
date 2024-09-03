let numbers =[1,3,4]

let [a,b]=numbers

console.log(a)
console.log(b)
console.log(numbers)

//destructuring objects 
let person ={
    name:'abdul hasib',
    age:234,
    greet:function(){
        console.log("Hello everyone!")
    }
}

let {name,age} = person

console.log(name)