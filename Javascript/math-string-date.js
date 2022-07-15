//Math Library
Math.PI //3.141592653589793
Math.round // 9.18 -> 9
Math.floor //9.18 -> 9
Math.ceil //9.18 -> 10
console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value
console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)

//<---------------------------------------------------------------------------------->
/*
Escape Sequences in Strings
In JavaScript and other programming languages \ followed by some characters is an escape sequence. Let's see the most common escape characters:

\n: new line
\t: Tab, means 8 spaces
\\: Back slash
\': Single quote (')
\": Double quote (")

*/

let str="abcdefg"
console.log(str[0]); //a
//toUpperCase(): this method changes the string to uppercase letters.
console.log(str.toUpperCase())  //ABCDEFG
//substr(): It takes two arguments, the starting index and number of characters to slice.
console.log(str.substr(1,3)) //bcd -> from where to where
//substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.
console.log(str.substring(0,3)) //abc -> from strt index to end index


//<---------------------------------------------------------------------------------------->

//Date

let year = new Date().getFullYear()
console.log(year) // -> 2022
/*
getFullYear() -> year
getMonth() -> month number
getDay() -> day number of week (0 to 6)
getDate() -> date (1 to 31)
getHours() -> hours (0 to 23)
getMinutes() -> minutes (0 to 59)
getSeconds() -> seconds (0 to 59)
getMiliseconds() -> ms (0,999)
getTime() -> time in ms (from 1 jan,1970)
*/