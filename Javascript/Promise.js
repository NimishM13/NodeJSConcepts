/* 
A Promise is a way to handle asynchronous operations in JavaScript. 
It allows handlers with an asynchronous action's eventual success value or failure reason. 
This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation completed successfully.
rejected: meaning that the operation failed.

const promise = new Promise((resolve, reject) => {
    resolve('success')
    reject('failure')
  });

*/

// Promise
const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        if (skills.length > 0) {
        resolve(skills)
        } else {
        reject('Something wrong has happened')
        }
    }, 2000)
})
  
  doPromise
    .then(result => {
      console.log(result) //["HTML", "CSS", "JS"]
    })
    .catch(error => console.log(error));

//Fetchh API
const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    // getting the data
    console.log(data)
  })
  .catch(error => console.error(error))


//Async and Await

//The word async in front of a function means that function will return a promise..
