 var gamer = {
     name: "leon played",
     games: "alot of games",
     address: "in Hyderabad",
     getDetails: function()
     {
         return this.name + "\t" + this.games + "\t" + this.address;
     }
 }

 console.log(gamer.getDetails());