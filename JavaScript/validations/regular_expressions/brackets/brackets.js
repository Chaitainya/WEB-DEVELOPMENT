var str = "hello";

var pattern = /[abc]/;

console.log(pattern.test(str)); // false // because we don't find a or b or c in the string



var str = "helloa"; // <--

var pattern = /[abc]/;

console.log(pattern.test(str)); // true because 'a' is added in the end of the string.





var str = "helloa";

var pattern = /[abc]m/; // <-- // it goes like am or bm or cm 

console.log(pattern.test(str)); // false

// so

var str = "helloam"; // <--

var pattern = /[abc]m/;

console.log(pattern.test(str)); // true

// or

var str = "hellobm";

var pattern = /[abc]m/;

console.log(pattern.test(str)); // true

// trail

var str = "hellomb"; // <--

var pattern = /[abc]m/;

console.log(pattern.test(str)); // false



// another trail

var str = "hellob";

var pattern = /[^abc]/; // <--

console.log(pattern.test(str)); // true // "[^abc] = not of a or b or c". Otherthan a, otherthan b, otherthan c, if we have anything in the string then that's true. 