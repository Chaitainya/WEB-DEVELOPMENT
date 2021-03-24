var str = "SPCYHYD";

var pattern = /HYD(?!SPCY)/; // we need to pass both in a bracket

console.log(pattern.test(str)); // true


var str = "HYDSPCY";

var pattern = /HYD(?!SPCY)/

console.log(pattern.test(str)); // false


var str = "HYD SPCY";

var pattern = /HYD(?!SPCY)/

console.log(pattern.test(str)); // true