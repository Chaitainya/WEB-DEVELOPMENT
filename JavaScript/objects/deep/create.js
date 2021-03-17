var address = {
    location: "Madhapur",
    city: "Hyderabad",
    state: "Telangana"
}

var student1 = {
    name: "Leon",
    studentID: "306",
    course: "Python"

}

var student2 = {
    name: "Rehan",
    studentID: "301",
    course: "Wed Development"
}

var student3 = {
    name: "Thomas",
    studentID: "309",
    course: "Machine Learning"

}

var student1 = Object.create(address);

console.log(student1); // {}
console.log(student1.location);
console.log(student1.city);
console.log(student1.state);

student1.name = "Chaitainya";
student1.course = "DeVops";

console.log(student1);

var student2 = Object.create(address);

console.log(student2); //{}



