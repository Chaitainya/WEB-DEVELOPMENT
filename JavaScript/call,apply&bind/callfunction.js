var emp = {
    name: "Leon",
    address: "Hyderabad",
    eid: 202,
    details: function()
    {
        console.log(this.name + "," + this.address + "," + this.eid);
    }
}

emp.details();

var emp2 = {

    name: "Rehan",
    address: "Hyderabad",
    eid: 416
}
var emp3 = {

    name: "Thomas",
    address: "Bangalore",
    eid: 879 
}

emp.details.call(emp2);
