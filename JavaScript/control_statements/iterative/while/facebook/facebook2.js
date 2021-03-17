var messages = [
    {
        sender: "Leon",
        message: "Hello! How are you?",
        time: "10:45PM"
    },
    {
        sender: "Rehan",
        message: "Hey dude, Whatsup?",
        time: "4:20PM"
    },
    {
        sender: "Thomas",
        message: "Hell yeah, you're there.",
        time: "9:45PM"
    },
    {
        sender: "Sayda",
        message: "Assalam Valaikum",
        time: "5:00AM"
    }
];

var index = 0;

while(index < messages.length){
    console.log(messages[index].sender + ":    " + messages[index].message + "    " + messages[index].time);
    index++;
}