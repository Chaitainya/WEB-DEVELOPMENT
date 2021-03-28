// // Create a template for greeting that to be sent to clients - 4 clients

// name, company, locations
 
// temp:

//      Hello <name>,

//      We would like to visit your main branch <company name> at <location> to
//      discuss about the new project.

//      Thanks,
//      <CEO>

var CEO = [
    {
        Name: "Elon Musk",
        Company: "Tesla",
        Location: "United States of America"
    },
    {
        Name: "Mukesh Ambani",
        Company: "Reliance",
        Location: "India"
    },
    {
        Name: "Ratan Tata",
        Company: "TATA",
        Location: "Miami"
    },
    {
        Name: "Steve Jobs",
        Company: "Apple",
        Location: "Washington"
    }
];

var ceo = "LEON THE GREAT";

for(var i = 0; i < CEO.length; i++)
{
    console.log(`
    Hello ${CEO[i].Name},

    We would like to visit your company main branch ${CEO[i].Company} at ${CEO[i].Location} to
    discuss about the new project.

    Thanks,
    ${ceo}
    `)
}