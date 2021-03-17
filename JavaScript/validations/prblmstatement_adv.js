// find the index

var str = "hello how are you";

var pattern = /l/;

console.log(str.match(pattern)); // [ 'l', index: 2, input: 'hello how are you', groups: undefined ]
// In string there is function called 'match function', what match function do is "it is going to match with the regular expression pattern"





// find how many times 'l' is repeated

var str = "hello how are you";

var pattern = /l/g;     // <-- 'g' is called as modifier

console.log(str.match(pattern)); // [ 'l', 'l' ]

// or

var str = "hello how are you";

var pattern = /l/g;     // <--

console.log(str.match(pattern).length);     // <-- // 2





// test

var str = "hello H H how H are you";

var pattern = /h/g;     // <--

console.log(str.match(pattern).length); // 2

// or it will going to match doesn't matter whether lowercase or uppercase, then we use 'i'.

var str = "hello H H how H are you";

var pattern = /h/gi;     // <-- 'i' for case insentivity

console.log(str.match(pattern).length); // 5