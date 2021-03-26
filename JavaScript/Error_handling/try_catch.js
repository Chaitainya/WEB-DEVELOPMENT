var a = 100;

var b = 200;

console.log(a + b); // 300

try{
    console.log(c);
}catch(error){
    console.log(error.message); // c is not defined // catch block will execute only if there is any error. If there is no error, catch block will not execte.
}

console.log(a); // 100

console.log(b); // 200