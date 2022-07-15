let arr=[] //initialize array
let Arr = Array() //initialize array object

//let arr =  Array(4).fill(0) -> [0,0,0,0] -> fil static value for all positions

let arr1=[1,2,3]
let arr2=[4,5,6]
let arr3 = arr1.concat(arr2) // [1,2,3,4,5,6]

arr1.indexOf(2) // get index of value if present else -1 -> 1
[1,2,3,4,2].lastIndexOf(2) //get last occurance index ->4 
arr1.includes(3) // check if value present-> true

arr1.toString() // concert arr to string -> 1,2,3

const numbers = [1, 2, 3, 4, 5]
console.log(numbers.join()) // 1,2,3,4,5
console.log(numbers.join('#')) //1#2#3#4#5

arr1.slice() //->get full array
arr1.slice(0) //-> get full array
arr1.slice(0,1) //-> [0]

arr1.splice() // remove item from array from index

arr1.push(4) //push item at the last -> [1,2,3,4]

arr1.pop() //remove item at the last -> [1,2,3]

arr1.shift() //remove item from begining -> [2,3]

arr1.unshift(6) //add item from begining -> [6,2,3]

arr1.reverse() //reverse array -> [3,2,6]

arr1.sort() //sort array in asc order (either by number or by alphabet) -> [2,3,6] 



