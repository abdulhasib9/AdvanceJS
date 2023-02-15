console.log("--------------------------------- Comparasion Operators --------------------------------")
console.log(44<2.4);
console.log("string".length<="String!".length);

console.log("--------------------------------- == vs === --------------------------------")
console.log(false ==false);
console.log('7'==7); //true
console.log('7'===7);//false

console.log("--------------------------------- IF statement --------------------------------")
let rating =3;
if(rating<5){
    console.log("sorry Your are not a superstar");
}

let num = 37;
if(num%2 !==0){
    console.log("Odd Number")
}

console.log("--------------------------------- Else IF --------------------------------")

if(rating ===3){
    console.log("you are a super star")
}else if(rating<3){
    console.log("sorry you are not super star")
}

console.log("--------------------------------- else Statement --------------------------------")
if(rating ===4){
    console.log("you are a super star")
}else if(rating<3){
    console.log("sorry you are not super star")
}else{
    console.log("invalid rating")
}

console.log("--------------------------------- Switch Statment --------------------------------")
let day =3
switch(day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    default:
        console.log("invalid day")

}
