function Employee(employee_id, employee_name, employee_address)
{
    this.empId = employee_id;
    this.empNam = employee_name;
    this.empAdd = employee_address;
}

var emp = new Employee(302, "Leon", "Hyderabad");

console.log(emp);

var emp2 = new Employee(517, "Rehan", "Hyderabad");

console.log(emp2);