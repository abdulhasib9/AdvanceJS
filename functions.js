function outer(){
    let movie ="avatar"
    function inner(){
        let movie ="top gun"
        console.log(movie)
    }
    inner()
}

outer()

//function expression 
let funexp = function(x,y){
    return x+y
}
funexp(23,4)

let functionsArray = [outer,funexp]
functionsArray[0]
functionsArray[1](23,4)

for (let fun of functionsArray){
    console.log(fun(233,44))
}
console.log("--------------------------------- function as argument --------------------------------")
function cry(){
    console.log("i am sad !!")
}
function callThreeTimes(fun){
    fun()
    fun()
    fun()
}

callThreeTimes(cry)

function repeatNtime(fun,num){
    for(let i =0;i<=num;i++){
         fun()
    }
}
repeatNtime(cry,10)