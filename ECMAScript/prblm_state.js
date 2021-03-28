// Implement guest login and user login using default parameters.
// If the user enters username and password take it, if the user didn't
// pass any username and password, then take the default username and password.

// function user(username = "Leon", password = "123")
// {
//     if(username == "Leon" && password == "123")
//     {
//         console.log("user login");  // <--
//     }
//     else
//     {
//         console.log("guest login");
//     }
// }
// user();

function user(username = "Leon", password = "123")
{
    if(username == "Leon" && password == "123")
    {
        console.log("user login");
    }
    else
    {
        console.log("guest login");  // <--
    }
}
user("Rehan", "321");