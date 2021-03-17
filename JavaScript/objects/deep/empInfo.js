var employee = {
    eid: 101,
    ename: "LeonRehan",
    address: {
        city: "Hyderabad",
        state: "Telangana",
        country: "India"
    },
    technologies: ["C", "HTML", "CSS", "JavaScript", "Python"],
    isOnBench: false,
    project: {
        name: "CRM",
        lead: "Thomas"
    }
}

console.log(employee.ename);

console.log(employee.project);
console.log(employee.project.name);

employee.technologies.forEach(function (emp)
{
    console.log(emp);
})