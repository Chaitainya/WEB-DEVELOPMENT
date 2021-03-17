var chargers = ["Type C", "Universal", "Nokia Pin", "Samsung Pin"];

chargers.splice(2, 1, "Small Pin", "Flat pin");

console.log(chargers); // [ 'Type C', 'Universal', 'Small Pin', 'Flat pin', 'Samsung Pin' ]