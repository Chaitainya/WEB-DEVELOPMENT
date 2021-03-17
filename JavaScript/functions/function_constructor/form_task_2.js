function Details(name, brand, price)
{
    this.name = name;
    this.brand = brand;
    this.price = price;
}

var product = new Details("Playstation 5", "Sony", "50,000/-")

console.log("name of the product is ", product.name + ", brand", product.brand + " and price of the product is ", product.price);