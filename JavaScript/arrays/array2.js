var arr = [100,200,'hello','how'];

console.log(arr); // [ 100, 200, 'hello', 'how' ]

// To get individual values we can pass the index values,
// Indexing starts from 'Zero ( 0 )'

console.log(arr[0]); // 100
console.log(arr[1]); // 200
console.log(arr[2]); // hello
console.log(arr[3]); // how

// If the value is not assigned it will give us "Undefined."

console.log(arr[4]); // undefined

// So if we want to add an element in the last,

arr.push("hey");
console.log(arr[4]); // hey

console.log(arr); // [ 100, 200, 'hello', 'how', 'hey' ]

// So if we want to add an element in the starting,

arr.unshift(0);
arr.unshift("Leon");

// Now just check the first element index number because we've been added two new elements in the starting.

console.log(arr[0]);
console.log(arr[1]);

console.log(arr);