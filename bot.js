const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.author.bot || !message.content.startsWith(process.env.prefix)) { return; }

	let command = message.content.split(" ")[0].toLowerCase().slice(process.env.prefix.length);

	let args = message.content.split(" ").slice(process.env.prefix.length);
	if (command === 'ping') {
		message.channel.send('Pong.');
	}
});

client.login('NTI0NjI3OTcwMDYxNjMxNDg4.Dvq1eA.KrW2o5nQQOP2okF9Pigsuy3Qem4');
