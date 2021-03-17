var arr = [10, 20];

function f1(array)
{
    array.push(200);
}

f1(arr);

console.log(arr.length); // 3

console.log(arr);