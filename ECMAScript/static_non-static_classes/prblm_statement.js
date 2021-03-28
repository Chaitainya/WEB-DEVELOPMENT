// Create a simple banking app with the following features,

// customer -> account number, name, balance --> non-static variables

// withdraw(), deposit()

class Customer{
    accountNo;
    name;
    initialBal;

    withdraw(amount)
    {
        if(amount > this.initialBal)
        {
            console.log("Insuffient balance");
            return;
        }
        else
        {
            this.initialBal = this.initialBal - amount;
            console.log("final balance is " + this.initialBal);
        }
    }

        deposit(amount)
        {
            this.initialBal = this.initialBal + amount;
            console.log("Added balance is " + this.initialBal);
        }

}

var cus1 = new Customer();
cus1.name = "Leon";
cus1.accountNo = 812145697458;
cus1.initialBal = 9000;

console.log(cus1);

cus1.withdraw(1000);
cus1.withdraw(20000);

cus1.deposit(1000);
cus1.deposit(1000);
cus1.deposit(1000);
cus1.deposit(1000);
cus1.deposit(1000);
cus1.deposit(1000);