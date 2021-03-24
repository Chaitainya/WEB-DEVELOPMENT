var str = "hellob";

var pattern = /[a-z]/; // <-- instead of writing abcdefgh......etc, we can type a-z

console.log(pattern.test(str)); // true



var str = "hellob";

var pattern = /[^a-z]/; // <--

console.log(pattern.test(str)); // false