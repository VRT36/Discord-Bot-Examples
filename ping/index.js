const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am online');
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.channel.send('pong');
  }
});

client.login('bot token');
