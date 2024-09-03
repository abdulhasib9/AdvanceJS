// // alert("working")

// function test(){
//     console.log(this)
// }
// test()
// console.log('********* testing this keyword with arrow functions *********************')
// var fn = ()=>console.log(this)
// fn()

// document.querySelector('button').addEventListener('click',test)

//obejct litterals 
let ageField  = 'Age'

let person ={
    [ageField]:25,
    name :'test'

}

//console.log(person[ageField])

//rest operator 
function fn(...toadd){
    let result =0
    for(let i =0 ;i<toadd.length; i++){
        result += toadd[i]
    }
   
    return result
}

console.log(fn(23,444,555,3))