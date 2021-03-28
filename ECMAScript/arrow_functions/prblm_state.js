// Create an arrow function that takes username, password as input values
// and checks whether the username is Leon and password is 123,
// based on the topic, return the result i.e, boolean value

var validate = (username, password) => username == "Leon" && password == "123";

console.log(validate("Leon", "123")); // true
console.log(validate("Leon1", "123L")); // false