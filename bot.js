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

    async run(message, args){

        const voiceChannel = message.member.voiceChannel;
        if (!voiceChannel){
            return message.channel.sendMessage("you must be in a voice channel to request me");
        }

        if (args === ""){
            message.reply('i need a link to play a youtube video');
            console.log('message didnt send');
        }
        else {
            if (message.content.includes("http://") || message.content.includes("https://")) {
                if (message.content.includes("youtube") || message.content.includes("youtu.be")) {

                    message.channel.sendMessage(":white_check_mark: **connected**");
                    voiceChannel.join()
                    .then(connection => {
                        const args = message.content.split(" ").slice(1);
                        let stream = yt(args.join(" "));
                        yt.getInfo(args.join(" "), function(err, info) {
                            const title = info.title
                            message.channel.sendMessage(`this song was requested \`${title}\`.)
                        })
                        const dispatcher = connection.playStream(stream, {audioonly: true});
                        dispatcher.on('end', () => {

                            voiceChannel.leave();
                            message.channel.sendMessage('song finished')
                        }).catch(e =>{
                            console.error(e);
                        });
                    })
                } else {
                    message.reply('only youtube links are allowed');
                }
            } else {
                message.reply('only youtube links are allowed');
            }
        }
    }
}
module.exports = play;
client.login('NTI0NjI3OTcwMDYxNjMxNDg4.Dvq1eA.KrW2o5nQQOP2okF9Pigsuy3Qem4');
