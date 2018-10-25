const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`with ducks`);
});

bot.on("message", async message => {

  if(message.content == 'pek'){
    message.channel.send("ahu");
  }
});

bot.login(process.env.token);
