var f1 = (a = 10, b = 20) => a + b;
console.log(f1()); // 30

var f2 = (a = 10, b = 20) => a + b;
console.log(f2(50, 50)); // 100