const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`with ducks`);

  console.log("Servers to quack:");
  bot.guilds.forEach((guild) => {
    console.log(" - " + guild.name);

    guild.channels.forEach((channel) => {
      console.log("  -  ${channel.name} (${channel.type}) - ${channel.id}");
    })
  })
});

bot.on("message", async message => {
  
  if(message.content == 'pek'){
    message.channel.send("ahu");
    break;
  }
  
  else if(message.content == 'ahu'){
    message.channel.send("pek");
    break;
  }
});

bot.login(process.env.token);
