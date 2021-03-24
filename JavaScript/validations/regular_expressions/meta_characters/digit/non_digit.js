var str = "leon@gmail1.com";

var pattern = /\D/;

console.log(pattern.test(str)); // true // because otherthan digit we also have lowercase characters there and also have a special character '@'