var chargers = ["Type C", "Universal", "Nokia Pin", "Samsung Pin"];

chargers.splice(2,2, "Small Pin", "Flat pin");

console.log(chargers); // [ 'Type C', 'Universal', 'Small Pin', 'Flat pin' ]