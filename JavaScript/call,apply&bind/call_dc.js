var dcComics = {

    details: function()
    {
        console.log("name of the hero " + this.name + ", " + this.power + " form " + this.city + "," + " with " + this.secret_id + " and " + this.normal_life);
    }

}

var manInTheHood = {
    name: "Arrow",
    actual_name: "Oliver Queen",
    power: "no powers",
    city: "Star City, is a fictional city",
    secret_id: "Green Arrow",
    normal_life: "Rich and Mayor"
}

var speed = {
    name: "Flash",
    actual_name: "Barry Allen",
    power: "Speed",
    city: "Central City, is a fictional American city",
    secret_id: "The Flash",
    normal_life: "Forensic Scientist"
}

var kryptonian = {
    name: "SuperGirl",
    actual_name: "Kara Danvers",
    power: "Super Strength, Laser From Eyes and Flying",
    city: "National City, located in California in the United States of America",
    secret_id: "SuperGirl",
    normal_life: "works in CarCo company as assistant to Cat"
}

dcComics.details.call(manInTheHood);