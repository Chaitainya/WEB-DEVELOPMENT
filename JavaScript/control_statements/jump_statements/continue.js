// for(var i=1;i<10;i++)
// {
//     console.log(i); // 23456789
// }

for(var i=1;i<10;i++)
{
    if(i==2){
        continue; // when ctrl finds continue when the value is true(i=2), it will just skips the iteration.
    }
    console.log(i); // 1 3456789 // we don't get the value of 2
}