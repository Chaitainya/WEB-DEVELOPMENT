// Create a customer class that should contain a function called create account.
// which takes name, address, age, aadhar number.

class Customer{
    name;
    address;
    age;
    aadharNumber;

    createAccount(name,address,age,aadharNumber)
    {
        this.name = name;
        this.address = address;
        this.age = age;
        this.aadharNumber = aadharNumber
    }
}

var cus1 = new Customer();
cus1.createAccount("leon", "HYD", 24, 14605192345)
console.log(cus1);