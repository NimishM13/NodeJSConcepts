/*
Flags
Flags are optional parameters in a regular expression which determine the type of searching. Let us see some of the flags:

g: a global flag which means looking for a pattern in whole text
i: case insensitive flag(it searches for both lowercase and uppercase)
m: multiline
*/

//regex Methods
//1. test():Tests for a match in a string. It returns true or false.
const str = 'I love JavaScript'
const pattern = /love/
const result = pattern.test(str)
console.log(result) //true