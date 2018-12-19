const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === '!ping') {
		message.channel.send('Pong.');
	}
});

client.login('NTI0NjI3OTcwMDYxNjMxNDg4.Dvq1eA.KrW2o5nQQOP2okF9Pigsuy3Qem4');
