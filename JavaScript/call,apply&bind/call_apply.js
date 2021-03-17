var person = {
    fullName: function(city, country)
    {
        console.log(this.firstName + " " + this.lastName + "," + city + "," + country);
    }
}

var person1 = {
    firstName: "leon",
    lastName: "Rehan"
}

// person.fullName.call(person1, "Hyderabad", "India"); // leon Rehan,Hyderabad,India

// person.fullName.apply(person1, ["Hyderabad", "India"]); // leon Rehan,Hyderabad,India

var x = ["Hyderabad", "India"];

// person.fullName.call(person1, x); // leon Rehan,Hyderabad,India,undefined (so, this is only printing two values in city only) thats why undefined got printed

// person.fullName.apply(person1, x); // leon Rehan,Hyderabad,India

// or if you want to use only call but both city and country names should print their positions, then

person.fullName.call(person1, x[0], x[1]); // leon Rehan,Hyderabad,India