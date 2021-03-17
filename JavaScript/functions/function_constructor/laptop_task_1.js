// Create a function constructor that stores the details of a laptop.

// name, brand, price

// Create 5 objects

function Laptop(name, brand, price)
{
    this.lName = name;
    this.lBrand = brand;
    this.lPrice = price;
}

var lappie = new Laptop("HP Pavilion", "HP", "64,000/-");

var lappie2 = new Laptop("Dell Inspiron", "Dell", "40,000/-");

var lappie3 = new Laptop("MAC", "Apple", "1,00,000/-");

var lappie4 = new Laptop("HP Omen", "HP", "90,000/-");

var lappie5 = new Laptop("Lenovo Legion", "Lenovo", "72,000/-");

console.log(lappie);
console.log(lappie2);
console.log(lappie3);
console.log(lappie4);
console.log(lappie5);