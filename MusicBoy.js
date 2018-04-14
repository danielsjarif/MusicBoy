const { Client, Util } = require('discord.js');
const { TOKEN, PREFIX, GOOGLE_API_KEY } = require('./config');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');

const client = new Client({ disableEveryone: true });

const youtube = new YouTube(GOOGLE_API_KEY);

const queue = new Map();

client.on('warn', console.warn);

client.on('error', console.error);

client.on('ready', () => console.log('Yo this ready!'));

client.on('disconnect', () => console.log('I just disconnected, making sure you know, I will reconnect now...'));

client.on('reconnecting', () => console.log('I am reconnecting now!'));

client.on('message', async msg => { // eslint-disable-line
	if (msg.author.bot) return undefined;
	if (!msg.content.startsWith(PREFIX)) return undefined;

	const args = msg.content.split(' ');
	if (msg.content.startsWith(`${PREFIX} play`)) {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('Please join a voice channel in order to JAM');

		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			return msg.channel.send('I am but a permission-less bot. Please give me permissions to join your voice channel!');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('I have been silenced! Permission to speak in the voice channel?');
		}

		try {
			var connection = await voiceChannel.join();
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			return msg.channel.send(`I could not join the voice channel : ${error}`);
		}

    console.log(args[2]);
		const dispatcher = connection.playFile('C:/Users/Daniel Sjarif/Repos/MusicBoy/music/whitney.mp3');
		// const dispatcher = connection.playFile((args[2]));
		// client.voiceConnection.playFile('C:/Users/Daniel Sjarif/Desktop/polaris.mp3')
		dispatcher.on('end', () => {
				console.log('Song has ended. Hope you enjoyed it!');
				// voiceChannel.leave();
			});
		dispatcher.on('error', error => {
				console.error(error);
			});
		dispatcher.setVolumeLogarithmic(5 / 5);
	} else if (msg.content.startsWith(`${PREFIX} stop`)) {
		if(!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
		msg.member.voiceChannel.leave();
		return undefined;
	}
});

client.login(TOKEN);
