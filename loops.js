for(let i =0;i<=10;i++){
    console.log(i)
}

//generating the table

for (let j =0;j<=20;j++){
    console.log(`${j} x ${j} = ${j*j}`)
}
//loop backward 
console.log("Reverse Loop")
for (let num=50;num>0;num--){
    console.log(num)
}

console.log("--------------------------------- infinite loops --------------------------------")

// for(let k =0;k!==21;k+=2){
//     console.log(k)
// }

console.log("--------------------------------- for loop and arrays of object --------------------------------")
let students = [
    {firstName:"abdul Hasib",
marks:23},
{
    firstName:"noman",
    marks:32
}
]

for(let items =0;items<students.length;items++){
    console.log(students[items])
    console.log(students[items].firstName)
}

console.log("--------------------------------- nested loops --------------------------------")
let gameBoard =[
    [2233,3434,55],
    [233,43,54],
    [3423,43,55]
]

for( let game1 =0;game1<gameBoard.length;game1++){
    let items = gameBoard[game1]
    for(let game2=0;game2<items.length;game2++){
        console.log(items[game2])
    }
}

console.log("--------------------------------- while loop --------------------------------")
let jj=0;
while(jj<=5){
    console.log(jj)
    jj++
}

console.log("--------------------------------- break statement --------------------------------")
let jjj=0;
while(jjj<=5){

    console.log(jjj)
    
    if(jjj===3)
    break
    jjj++
}

console.log("--------------------------------- for of loop --------------------------------")
//for of  loop is not supported by the internet explorer
let food =["burger","chicken","fish"]
for (const items of food) {
    console.log(items)
}

for(let char of "my name is abdul hasib yousufzai")
{
    console.log(char)
}