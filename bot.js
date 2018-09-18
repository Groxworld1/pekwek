const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () ==> {
	  console.log('Ready!');
});

client.on('message', () ==> {
	  if (message.content == 'pek'){
	  message.reply('ahu');
	  }
});
	  
client.login(process.env.BOT_TOKEN);	
