const Discord = require('discord.js');
const {
	prefix,
	token,
} = require('./config.json');
const ytdl = require('ytdl-core');
const client = new Discord.Client();
client.login(token);
client.once('ready', () => {
    console.log('Ready!');
   });
   client.once('reconnecting', () => {
    console.log('Reconnecting!');
   });
   client.once('disconnect', () => {
    console.log('Disconnect!');
   });

   client.on('message', async message => {
    if (message.author.bot) return;
    message.channel.send("<:m64_a:834442307515842566>");
    console.log('read message');
   });