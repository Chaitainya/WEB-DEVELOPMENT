var str = "hellob";

var pattern = /[^abc]/; // <--

console.log(pattern.test(str)); // true // "[^abc] = not of a or b or c". Otherthan a, otherthan b, otherthan c, if we have anything in the string then that's true. 