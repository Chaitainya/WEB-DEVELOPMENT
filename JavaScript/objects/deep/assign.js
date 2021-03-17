var obj = {
    name: "ravi",
    address: "Hyderabad"
};
console.log(obj); // { name: 'ravi', address: 'Hyderabad' }

var s = {id: 101};
console.log(s); // { id: 101 }

Object.assign(s, obj);
console.log(s); // { id: 101, name: 'ravi', address: 'Hyderabad' }