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
  
  var testChannel = client.channels.get("315142564057579521");
  
  if (receivedMessage.author.id == "187880052178944000"){
    return;
  }
    
  receivedMessage.testChannel.send("Message received " + receivedMessage.content);
});

bot.login(process.env.token);
