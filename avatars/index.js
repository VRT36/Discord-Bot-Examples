const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am online!');
});

client.on('message', message => {
  if (message.content === 'what is my avatar') {
    message.reply(message.author.displayAvatarURL());
  }
});
client.login('bot token');
