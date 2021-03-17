// Shifting Elements

// Shifting is equivalent to popping, working on the first element instead of the last.
// The shift() method removes the first array element and "shifts" all other elements to a lower index.

var mobiles = ["Moto", "Oppo", "Vivo", "Asus"];

console.log(mobiles.shift()); // Moto

console.log(mobiles); // [ 'Oppo', 'Vivo', 'Asus' ]