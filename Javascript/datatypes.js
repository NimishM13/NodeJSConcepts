let str1 = 'abc';
let str2= 'abc'
console.log(str1==str2) //true -> match values

let arr1=[1,2,3];
let arr2=[1,2,3];
console.log(arr1==arr2) //false -> match reference

let obj1 = {};
let obj2= {}
console.log(obj1==obj2) //false -> match reference

let arr=[1,2,3];
let copyArr = arr; //copying reference var
console.log(arr==copyArr) //true -> match reference