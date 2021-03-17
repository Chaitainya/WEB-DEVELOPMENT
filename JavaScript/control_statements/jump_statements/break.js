// var choice = 1;

// switch(choice)
// {
//     case 0 : console.log("case 0");
//     case 1 : console.log("case 1");
//     case 2 : console.log("case 2");
// }

function f1(){

var choice = 1;

switch(choice){

    case 0 : console.log("case 0"); break;
    case 1 : console.log("case 1"); break; // break will terminate only the block.
    case 2 : console.log("case 2"); break;
}

console.log("After switch case");

}

f1();