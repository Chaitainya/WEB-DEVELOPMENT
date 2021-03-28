const emp = {
    name:"Leon",
    address: "Hyderabad"
};
console.log(emp.name); // Leon

emp.name = "Rehan";
console.log(emp.name); // Rehan

// We can modify data, but we cannot reassign

emp = {};
console.log(emp.name); // TypeError: Assignment to constant variable.