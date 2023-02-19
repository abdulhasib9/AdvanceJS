function average(num){
    let sum =0
    for(let numbers of num)
    {
        sum +=numbers
    }
    let res = sum/num.length
    console.log(res)
}
average([4343,455,3,4])