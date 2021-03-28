// Implement ES6 template literals for hike emails (template)

var employees = [
    {
        name:"Leon",
        currentCtc: "4.5",
        role: "Softwate Engineer",
        newRole: "Web Developer",
        hike: "10%",
        newCtc: "5.5",
        reportingManager: "Alice"
    },
    {
        name:"Rehan",
        currentCtc: "7.5",
        role: "Softwate Engineer",
        newRole: "Network Engineer",
        hike: "10%",
        newCtc: "9.5",
        reportingManager: "Lucy"
    },
    {
        name:"Thomas",
        currentCtc: "14.5",
        role: "Softwate Engineer",
        newRole: "Senior Engineer",
        hike: "10%",
        newCtc: "15.5",
        reportingManager: "Swathi"
    }
];

for(var i = 0; i <employees.length; i++)
{
    console.log(`
                Dear ${employees[i].name},

                Greetings from XYZ Company,

                Your current CTC is ${employees[i].currentCtc} and you have got
                hike of ${employees[i].hike} and your new CTC will be
                ${employees[i].newCtc} with new role as ${employees[i].newRole}

                Thanks,
                ${employees[i].reportingManager}
    `)
}