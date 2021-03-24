// Create a pattern that should contain the following constraints.Create

// 1. It should've one upper case and a lower case

var str = "aA";

var pattern = /(?=.*[a-z])(?=.*[A-Z])/;

console.log(pattern.test(str)); // true

// one upper case, one lower case, one special character and one digit

var str = "LeonSayda@1501";

var pattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[\W])[\w\W]{8,}/;

console.log(pattern.test(str));