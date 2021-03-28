// Create the following pattern using string.\


// output should be like below,

//  line1


//            Line2


//                      Line3


//                                line4

var str = "";
var str1 = "line1";
var str2 = "               line2";
var str3 = "                            line3";
var str4 = "                                         line4";

console.log(str1);
console.log(str);
console.log(str);
console.log(str2);
console.log(str);
console.log(str);
console.log(str3);
console.log(str);
console.log(str);
console.log(str4);

// output
// line1


//                line2


//                             line3


//                                          line4

// or

var str55 = "line1\n\n\t\tline2\n\n\t\tline3\n\n\t\tline4";
console.log(str55);
// output
// line1

//                 line2

//                 line3

//                 line4

// so we have to use back ticks

var str76 = `
            line1

                         line2

                                      line3

                                                    line4
`
console.log(str76);