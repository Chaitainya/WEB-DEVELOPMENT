var config = Object.freeze(
    {
        port: 9011,
        url:"https://www.facebook.com",
        endPoint: "/users"
    }
)

console.log(config);
console.log(config.port);

config.port = 23988;
console.log(config.port);

config.url = "htttps://www.google.com";
console.log(config);

config.endPoint = "/programs";
console.log(config);



console.log(Object.isFrozen(config));