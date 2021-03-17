// var choice = "mean";
// switch(choice){

//     case "mean": console.log("Mean Stack"); // Mean Stack
//     case "mern": console.log("Mern Stack"); // Mern Stack
//     case "java": console.log("Java Stack"); // Java Stack
//     case "python": console.log("Python"); // Python
//     default: console.log("Course not available") // Course not available

// }

var choice ="Python"; // We can search here
switch(choice){

    case "mean": console.log("Mean Stack"); break; // break; is not a part of switch, break is a jump statement. Which should be used better when we work with switch.
    case "mern": console.log("Mern Stack"); break;
    case "java": console.log("Java Stack"); break;
    case "python": console.log("Python"); break;
    default: console.log("Course not available");

}

// The case values can be a number or a string.
// Case values shouldnot be duplicated