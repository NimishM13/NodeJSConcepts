//declaring a function without a parameter
function functionName() {
    // code goes here
  }
  functionName() // calling function by its name and with parentheses

/* ---------------------------------------------------------------------------------------*/

//Function with unlimited parameters
function sumAllNums() {
//arguments contain all the parameters
console.log(arguments) //{ '0': 1, '1': 2, '2': 3, '3': 4, '4': 'abc' }
}

sumAllNums(1, 2, 3, 4,'abc')
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

/* ---------------------------------------------------------------------------------------*/

//Arrow Function with unlimited parameters
const sumAllNums = (...args) => {
// console.log(arguments), arguments object not found in arrow function
// instead we use a parameter followed by spread operator (...)
console.log(args) //[1,2,3,4.'abc'] 
}
sumAllNums(1, 2, 3, 4,'abc')

/* ---------------------------------------------------------------------------------------*/

//Anonymous function or without name
const anonymousFun = function() {
    console.log('I am an anonymous function and my value is stored in anonymousFun')
}
/* ---------------------------------------------------------------------------------------*/

// Function expression -> assigning funct to var
const square = function(n) {
    return n * n
  }
  
  console.log(square(2)) // -> 4

/* ---------------------------------------------------------------------------------------*/

//Self Invoking Functions -> anonymous functions which do not need to be called to return a value.

let squaredNum = (function(n) {
return n * n
})(10)

console.log(squaredNum)

/* ---------------------------------------------------------------------------------------*/

//Arrow function
const squareRoot = n => {
    return n * n
  }
  
  console.log(squareRoot(2))  // -> 4

/* ---------------------------------------------------------------------------------------*/

//Function with default parameters
function defaultParam(name='abc'){
    //do something
}
defaultParam()

/* ---------------------------------------------------------------------------------------*/

