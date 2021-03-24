// without case insentivity

var str = "hello H H how H are you";

var pattern = /h/g;     // <--

console.log(str.match(pattern).length); // 2

// with case insentivity

var str = "hello H H how H are you";

var pattern = /h/gi;     // <-- 'i' for case insentivity

console.log(str.match(pattern).length); // 5