// Create a function that accepts username, password, emailid, date of birth, favorite color and mobile number.

// username, password and emailid are manadatory
// date of birth, favorite color and mobile number are optional.

// use rest parameters

function details(username, password, emailid,...restparams)
{
    console.log(username, password, emailid, restparams);

}
details("leon", "123", "leon@gmail.com", "01-08-1995", "Green", "8121222266");