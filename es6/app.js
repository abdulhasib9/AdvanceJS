function test(){
    console.log(this)
}
test()
console.log('********* testing this keyword with arrow functions *********************')
fn = ()=>console.log(this)
fn()