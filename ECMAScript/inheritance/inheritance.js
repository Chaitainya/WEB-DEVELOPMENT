class Calculator
{
    add(a,b)
    {
        console.log(a+b);
    }
    sub(a,b)
    {
        console.log(a-b);
    }
}

class ScientificCalc extends Calculator
{
    square(a)
    {
        console.log(a*a);
    }
    cube(a)
    {
        console.log(a*a*a);
    }
}

var sciCalc = new ScientificCalc();
sciCalc.add(1,2);
sciCalc.sub(6,3);
sciCalc.square(4);
sciCalc.cube(6);