//Scope -> Global and Local

a = 'JavaScript' // declaring a variable without let or const make it available in window object and this found anywhere
b = 10 // this is a global scope variable and found in the window object
function letsLearnScope() {
  console.log(a, b) //JavaScript 10
  if (true) {
    let a = 'Python'
    let b = 100
    console.log(a, b) //Python 100
  }
}
console.log(a, b) // JavaScript 10

/* ---------------------------------------------------------------------------------------*/

//Objects

let obj={}
const person = {
    firstName: 'Asabeneh',
    age: 250,
    country: 'Finland',
    city:'Helsinki',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'teacher',
    address: {
      street: 'Heitamienkatu 16',
      pobox: 2002,
      city: 'Helsinki'
    },
    getPersonInfo: function() {
      return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    }
  }

const keys = Object.keys(person) // get keys in json obj
console.log(keys) //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']

const values = Object.values(person) // get values in json obj 
console.log(values) //['Asabeneh',250,'Finland','Helsinki',[ 'HTML', 'CSS', 'JS' ],'teacher',...]

const entries = Object.entries(person) //get array of key vakue pair in json obj
console.log(entries) //[[ 'firstName', 'Asabeneh' ]['age', '250'], ...]

//hasOwnProperty -> check if property exist in json obj
console.log(person.hasOwnProperty('name')) //false


/* ---------------------------------------------------------------------------------------*/
