// Question mark equals to is used to check whether some set of characters following other set of characters.

var str = "HYDSPCY";

var pattern = /HYD(?=)SPCY/;

console.log(pattern.test(str)); // true


// for eg: we've space between HYD and SPCY

var str = "HYD SPCY";

var pattern = /HYD(?=)SPCY/;

console.log(pattern.test(str)); // false // even the space is counted