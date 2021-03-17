function greet(name) { //The name is the input o the function.
    console.log('Hello ' + name);
}

greet('Leon'); //'Leon' is an argument to the greet function.
               // And 'name' is the parameter the of the greet function.

            //    A parameter is what we have at function line at the time of declaration.
            //    Argument is the actual value was supplied to the parameter.
greet('Rehan');

function greet(name, lastName){
    console.log('Hello ' + name + ' ' + lastName)
}
greet('Leon', 'Rehan');