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
const Commando = require('discord.js-commando');
const yt = require('ytdl-core');
const Bot = new Commando.Client();

class play extends Commando.Command {

    constructor(client){
        super(client, {
            name:'play',
            group:'play',
            memberName:'play',
            description:'plays videos from youtube'
        });
    }

client.login('NTI0NjI3OTcwMDYxNjMxNDg4.Dvq1eA.KrW2o5nQQOP2okF9Pigsuy3Qem4');
