const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am online!');
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});
client.login('bot token');