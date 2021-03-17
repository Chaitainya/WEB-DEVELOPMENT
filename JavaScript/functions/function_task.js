// Create a function that takes username, password and return a boolean value
// based on the test-condition

// Dummy username is "Ravi" and password is "Kiran"

// function name is "authenticate"

// function should take two parameters "username and password"

// If the given username and password are " Ravi and Kiran " then return " true " else " false "

function authenticate(username, password)
{

    if(username == "Ravi" && password == "Kiran")
    {
        return true;
    }
    else
    {
        return false;
    }

}

var result = authenticate("Ravi", "Kiran");

console.log(result);