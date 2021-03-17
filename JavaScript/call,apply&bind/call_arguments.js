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

person.fullName.call(person1, "Hyderabad", "India");