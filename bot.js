const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});


bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
	if (message == 'pek'){	//If somebody says "pek", also works if previous words are space
		bot.sendMessage({
			to: channelID,
			message: 'ahu'	//It'll say "ahu"
		});
	}
});

bot.login(process.env.token);
