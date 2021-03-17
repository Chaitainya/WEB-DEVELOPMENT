// Splicing an Array
// The splice() method can be used to add new items to an array:

var chargers = ["Type C", "Universal", "Nokia Pin", "Samsung Pin"];

chargers.splice(2, 0, "Small Pin", "Flat pin");

console.log(chargers); // [ 'Type C', 'Universal', 'Small Pin', 'Flat pin', 'Nokia Pin', 'Samsung Pin' ]