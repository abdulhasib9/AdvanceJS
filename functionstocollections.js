const numbers =[23,45,332,34,53]
numbers.forEach(element => {
    console.log(element)
});

console.log("foreach with external function");
function custom(x){
    console.log(x)
}
numbers.forEach(custom)


//map function
const doubleNumbers = numbers.map(function (num){
    return num*2;
})
console.log(doubleNumbers)

let words = ["asap","brb","lmk"]
let wordsUpper = words.map(function(word){
    return word.toUpperCase().split("").join(".")
})
console.log(wordsUpper)

console.log("------------------------------ Arrow Functions -----------------------------------")

const arrowDemo = (x)=>{
    return x*4
}

console.log(arrowDemo(3))

//implicit return
const squar = x=>x*x
console.log(squar(3))

console.log("------------------------------ Array.Find Method  -----------------------------------")

const movies =[
    "spider man",
    "iron man",
    "venom",
    "bat man"
]

let isHaveMan = movies.find((m)=>{
    return m.includes("man")
})
//find stops when the first match is found
console.log(isHaveMan)

console.log("------------------------------ Array.filter method  -----------------------------------")

const containsMan = movies.filter(x=>x.includes("man"))
console.log(containsMan)

console.log("------------------------------ Some and Every method  -----------------------------------")

const all3lets = movies.every(x=>x.length===3)
console.log(all3lets)

const some3lets = movies.some(x=>x.length===3)
console.log(some3lets)

console.log("------------------------------ sorting arrays the rigth way -----------------------------------")
const sortedNumbers = numbers.sort((x,y)=>x-y)
console.log(sortedNumbers)
console.log("regular sort method with no call back functions")
console.log(numbers.sort())

const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
  }
]

const sortBooksByRatings = books.slice().sort((x,y)=>x.rating-y.rating)
console.log("before sorting")
console.log(books)
console.log("after sorting")
console.log(sortBooksByRatings)

console.log("------------------------------ Array Reduce Method  -----------------------------------")
let numbers2=[32,344,55,2,321,23]
let reducedNumbers = numbers2.slice().reduce((a,c)=>a+c)
console.log(reducedNumbers)

let marks =[23,455,63,234,543]
let maxMarks = marks.reduce((max,currentValue)=>{
    if(max>currentValue) return max
    return currentValue
})
console.log(marks)
console.log("Max mark is : "+maxMarks)

let minMarks = marks.reduce((min,currentValue)=>{
    if(min<currentValue) return min
    return currentValue
})

console.log("Minimum Marks is : "+minMarks)

const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y'];

// To tally the votes:
// const results = votes.reduce((tally, val) => {
//   if (tally[val]) {
//     tally[val]++
//   } else {
//     tally[val] = 1;
//   }
//   return tally;
// }, {})

console.log("testing the new m1 max")
// The shorter version:
const results = votes.reduce((tally, val) => {
  tally[val] = (tally[val] || 0) + 1;
  return tally;
}, {});
