function f1(a, b, c, d)
{
    console.log(a, b, c, d); // [ 1, 2, 3, 4 ] undefined undefined undefined // all the values will assign to 'a'
}

var arr = [1,2,3,4];
f1(arr);

// so

function f1(a, b, c, d)
{
    console.log(a, b, c, d); // 1 2 3 4
}

var arr = [1,2,3,4];
f1(arr[0],arr[1],arr[2],arr[3]);

// spread operator

function f1(a, b, c, d)
{
    console.log(a, b, c, d); // 1 2 3 4
}

var arr = [1,2,3,4];
f1(...arr);