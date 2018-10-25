const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", () => {
  //Tells you if DuckBot is online and running
  console.log(`${bot.user.username} is online!`);

  //Checks server where DuckBot is in
  console.log("Servers to quack:");
  bot.guilds.forEach((guild) => {
    console.log("- " + guild.name);
  })
  
  //The activity
  bot.user.setActivity(`with ducks`);
});

bot.on("message", (receivedMessage) => {
  
  var testChannel = bot.channels.get("315142564057579521");
  
  /*
  if (receivedMessage.author == bot.user){
    return;
  }
  */
  
  if(receivedMessage.content == "pek"){
    receivedMessage.channel.send("ahu");
  }
  
  else if(receivedMessage.content == "ahu"){
    receivedMessage.channel.send("pek");
  }
    
  receivedMessage.channel.send("Message received " + receivedMessage.content);
});

bot.login(process.env.token);
