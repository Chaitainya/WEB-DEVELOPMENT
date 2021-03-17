// var user = [
//     {
//         name: "Leon",
//         address: "Hyderabad"
//     },
//     {
//         name: "Rehan",
//         address: "Pakistan"
//     },
//     {
//         name: "Chaitainya",
//         address: "India"
//     },
//     {
//         name: "Chin Cha Chow",
//         address: "China"
//     }
// ]

// Create a user constructor, iterate above array and create the user object
// with the above provided objects.

// o/p:

// User {name: "leon", address: "Hyderabad"}

var user = [
    {
        name: "Leon",
        address: "Hyderabad"
    },
    {
        name: "Rehan",
        address: "Pakistan"
    },
    {
        name: "Chaitainya",
        address: "India"
    },
    {
        name: "Chin Cha Chow",
        address: "China"
    }
];

function Object(name, address)
{
    this.name = name;
    this.address = address;
}

var Details = new Object(user);

console.log(Details);