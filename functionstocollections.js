const numbers =[23,45,32,34,53]
numbers.forEach(element => {
    console.log(element)
});

console.log("foreach with external function");
function custom(x){
    console.log(x)
}
numbers.forEach(custom)