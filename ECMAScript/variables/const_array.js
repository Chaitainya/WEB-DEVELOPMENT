const arr = [1,2,3,4,5];
arr.push(90);
console.log(arr); // [ 1, 2, 3, 4, 5, 90 ]

// because reassigning will give error adding not.

//eg:

arr = [];
console.log(arr); // TypeError: Assignment to constant variable.

// and modification of data for const is applicable for arrays and objects