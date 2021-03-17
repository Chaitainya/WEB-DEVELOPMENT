function f1(){

    var choice = 1;
    
    switch(choice){
    
        case 0 : console.log("case 0"); break;
        case 1 : console.log("case 1"); return; // We can use return because we are writing in a function right. When ctrl finds return, the ctrl will jump out of the function. So return will terminates the complete function. But break will terminate only the block.
        case 2 : console.log("case 2"); break;
    }
    
    console.log("After switch case");  // case 1
    
    }
    
    f1();

    // when we use return it terminates the function
    