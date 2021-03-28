// Create a simple workflow for swiggy order using function generator.

function* swiggyOrder()
{
    console.log("Order Placed");
    yield "block-1";
    console.log("Food is being prepared");
    console.log("Delivery boy is at pickup location");
    console.log("Order Pickedup");
    yield "block-2";
    console.log("Delivery boy enroute");
    console.log("Delivery boy is at delivery location");
    console.log("Order deliveried");
}
var iterator = swiggyOrder();

iterator.next();

console.log("Order Cofirmed by restaurant");

iterator.next();

iterator.next();