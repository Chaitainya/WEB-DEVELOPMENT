// var array = [10,20,30,40,40,40,40]

// Skip the value 40 and print the remaining values.

// o/p: 10,20,30

var array = [10,20,30,40,40,40,40]

for(var i=10;i<=40;i++)
{
    if(i==40){
        continue;
    }
    console.log(i);
}