// Create and application  that reads data from a file...


try{
    console.log("accessing the file");
    console.log("file is being read");
    // throw new Error("something went wrong");
}
catch(error){
    console.log(error.message);
}
finally{
    console.log("close the file");
    console.log("finally block executed");
}