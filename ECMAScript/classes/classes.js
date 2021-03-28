// Bank wants to customer to login into the application using username and password

class Bank{
    username;
    password;

    login(username, password){
        if(username == "abc" && password == "123")
        {
            console.log("logged in");
        }
        else
        {
            console.log("uername/password is incorrect");
        }
    }
}

var customer1 = new Bank();
customer1.login("abc","123"); // logged in
customer1.login("abc","12"); // uername/password is incorrect