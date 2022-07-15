//Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable.
const numbers = [1, 2, 3]
  let [numOne, numTwo, numThree] = numbers

  console.log(numOne, numTwo, numThree) //123

//Destructuring during iteration
const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

for (const [country, city] of countries) {
    console.log(country, city) //Finland Helsinki  Sweden Stockhlm  Norway OSlo
}

//Destructuring Object
const rectangle = {
    width: 20,
    height: 10,
    area: 200
  }
  let { width, height, area, perimeter } = rectangle
  
  console.log(width, height, area, perimeter) //20 10 200 undefined

  //renaming with destructuring
let { width: w, height: h, area: a, perimeter: p } = rectangle

console.log(w, h, a, p) //20 10 200 undefined

/* ---------------------------------------------------------------------------------------*/

//Spread operator to get the rest of array elements
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums
​
console.log(num1, num2, num3) //1 2 3
console.log(rest) //[4, 5, 6, 7, 8, 9, 10]


const evens = [0, 2, 4, 6, 8, 10]
const evenNumbers = [...evens]

const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]

const wholeNumbers = [...evens, ...odds]

console.log(evenNumbers) //[0, 2, 4, 6, 8, 10]
console.log(oddNumbers) // [1, 3, 5, 7, 9]
console.log(wholeNumbers) //[0, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9]

//spread operator with args
const sumAllNums = (...args) => {
    console.log(args)
}

sumAllNums(1, 2, 3, 4, 5) //[1,2,3,4,5]



