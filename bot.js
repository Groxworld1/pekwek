const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
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
