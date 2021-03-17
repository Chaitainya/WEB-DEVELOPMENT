var str = "hello \n hey \n how are you";

var pattern = /h/;

console.log(str.match(pattern).length);


var str = "hello \n hey \n how are you";

var pattern = /h/g; // global modifier

console.log(str.match(pattern).length); // 3


var str = "hello \n hey \n how are you";

var pattern = /h/gi; // case insensitive

console.log(str.match(pattern).length); // 3


var str = "hello \n hey \n how are you";

var pattern = /^h/m;

console.log(str.match(pattern).length);