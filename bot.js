const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`with ducks`);
});

bot.on("message", async message => {
  
  if (message.channel.type == 1 && message.content == 'OwO'){
    message.channel.send(":ok_hand:");
  }

  if(message.content == 'pek'){
    message.channel.send("ahu");
  }
  
  else if(message.content == 'ahu'){
    message.channel.send("pek");
  }
  
  else if(message == 'kwek'){
    message.channel.send(":horse:");
  }
});

bot.login(process.env.token);
