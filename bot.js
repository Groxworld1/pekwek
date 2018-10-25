const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  //Tells you if DuckBot is online and running
  console.log(`${bot.user.username} is online!`);

  //Checks server where DuckBot is in
  /*
  console.log("Servers to quack:");
  bot.guilds.forEach((guild) => {
    console.log("- " + guild.name);
  })
  */
  
  //The activity
  bot.user.setActivity(`with ducks`);
  
  //Test message
  var testChannel = bot.channels.get("315142564057579521");
  testChannel.send("DiOwO");
});

bot.on("message", async message => {
  var testChannel = bot.channels.get("315142564057579521");
  testChannel.send("DiOwO");
});

bot.login(process.env.token);
