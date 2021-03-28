// We've a list of users
// 6 users
// use spread operator and pass 6 users to a function of 6 params

function f1(user1, user2, user3,...restparams)
{
    console.log(user1, user2, user3, restparams);
}
var arr = [1,2,3,4,5,6];

f1(...arr);