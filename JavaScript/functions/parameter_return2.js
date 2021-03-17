function authenticate(username, password){ // username, password are parameters

    if(username == "ravi" && password == "kiran")
    {
        return true;
    }
    else
    {
        return false;
    }
}
var result = authenticate("ravi", "kiran"); // ravi, kiran are arguments
console.log(result);