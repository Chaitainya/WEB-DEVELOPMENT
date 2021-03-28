// Through class only we can acces static variable and static methods

class Test{
    a = 10;
    b = 20;
    static x = 90;
    static y = 900;

    m1()
    {
        console.log("this is m1");
    }

    static m2()
    {
        console.log("this is m2");
    }
}
var test = new Test();
console.log(test.a); // 10
console.log(test.b); // 20
test.m1(); // this is m1
// test.m2(); // error
// Because it can be accessed only by using the class
// so, we cannot access it using the object
// Through class we can access it

Test.m2();
// in similar way we can access
console.log(Test.x);
console.log(Test.y);

// we cannot access non-static variables or methods using class
Test.a(); // error
Test.b(); // error