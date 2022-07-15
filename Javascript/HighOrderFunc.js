/* Higher order functions are functions which take other function as a parameter 
or return a function as a value. The function passed as a parameter is called callback.*/

// a callback function, the name of the function could be any name
const callback = (n) => {
return n ** 2
}

// function that takes other function as a callback
function cube(callback, n) {
return callback(n) * n
}
console.log(cube(callback, 3))

/* ---------------------------------------------------------------------------------------*/

//Setting Interval using a setInterval function

//syntax
function callback() {
    //code goes here
}
setInterval(callback, duration)

function sayHello() {
    console.log('Hello')
}
setInterval(sayHello, 1000) // it prints hello in every second, 1000ms is 1s

/* ---------------------------------------------------------------------------------------*/

//Setting a time using a setTimeout
// syntax
function callback() {
    // code goes here
}
setTimeout(callback, duration) // duration in milliseconds

function sayHello() {
    console.log('Hello')
}
setTimeout(sayHello, 2000) // it prints hello after it waits for 2 seconds.

/* ---------------------------------------------------------------------------------------*/

//Functional Programming

//forEach, map, filter, reduce, find, findOne

//forEach:
let arr = [1,2,3,4,5,6,7];

arr.forEach((element, index, arr) => {
  console.log(element, index) //10 21 32 43 54 65 76 
});

/*map: Iterate an array elements and modify the array elements. 
It takes a callback function with elements, index , array parameter and return a new array.*/
const numbers = [1, 2, 3, 4, 5]
const numbersSquare = numbers.map((num) => num * num)
console.log(numbersSquare) // [1,4,9,16,25]


/*Filter: Filter out items which full fill filtering conditions and return a new array.*/
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result); //["exuberant", "destruction", "present"]


/* reduce: */
const num = [1, 2, 3, 4, 5]
const sum = num.reduce((acc, cur) => acc + cur, 0)

console.log(sum)

/*find: Return the first element which satisfies the condition*/
const ages = [24, 22, 25, 32, 35, 18, 16]
const age = ages.find((age) => age < 20)

console.log(age) //18

/*findIndex: Return the position of the first element which satisfies the condition*/
const nums = [24, 22, 25, 32, 35, 18,16]
const numVal = nums.findIndex((age) => age < 20)

console.log(numVal) //5

/* ---------------------------------------------------------------------------------------*/

//Sets and Map

//Sets: Set is a collection of elements. Set can only contains unique elements. 

//creatign empty set
const companies = new Set()
console.log(companies) //Set(0) {}

const languages = ["English", "Finnish", "English", "French", "Spanish", "English", "French"];
  
const setOfLanguages = new Set(languages)
console.log(setOfLanguages) //Set(4) { 'English', 'Finnish', 'French', 'Spanish' }

//Add element in set
companies.add('Google');
//size of set
companies.size //1
//delete element
companies.delete('Google'); //{}
//chcek element in set
languages.has('English') //true
//clear all values
languages.clear() //{}