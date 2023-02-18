const hasib ={
    "totalSteps":23432,
    "totalMiles":23,
    "totalCalories":1230
}
console.log(hasib.totalMiles)

const fitBitData ={
    totalSteps:232,
    totalMiles:324,
    workoutThisWeek:'2 0ut of 7'
}

console.log(fitBitData.workoutThisWeek)

const numbers ={
    100:"one Hundred",
    16: "sixteen"
}
console.log(numbers[100])
console.log(numbers['100'])

//adding and update data
const userReviews ={

}
userReviews['QueenBee']=4.5;
userReviews.newName=3.44;
console.log(userReviews)
userReviews.QueenBee +=0.5;
console.log(userReviews)

//objects inside objecs 
let students ={
    name: "abdul hasib",
    scores:{
        midterm:233,
        final:44
    }
}
let totalScores = students.scores.midterm +students.scores.final;
console.log(totalScores)