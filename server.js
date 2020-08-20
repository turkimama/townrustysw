const discord = require('discord.js');
const client = new discord.Client();

client.on('ready', message => {
  console.log('I am ready');
});

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
http.get(`http://rustytown.glitch.me/`);
}, 280000);

client.on('ready', () => {
    console.log('Pro Life|')
     
 
 
    client.user.setGame("RustyTown",'https://www.twitch.tv/TEST-Broadcast');
});
 

client.on('message', message => {
  if(message.content === '+botinfo') {
    let embed = new discord.RichEmbed()
    .setTitle("RULES") //set title of embed
    .setURL("https://mrkzgulfup.com/uploads/159794857547921.png")
.setDescription(`.............................................................................................................
• Don't be offensive or racist.
• Don't spam in server or in Dm's.
• Permanent ban for scammers.
• Promotions are not allowed in the server.
• People who join to do negative marketing will be permanently ban.
• Never Share or ask anyone personal information.
• Don't mess up with admins or mods.
• Don't tag admins and mods unusally.
• Don't ask for roles.
• Never ask to unban.
• Respect each and other in the server.
• Remember this is a Rust don’t trust anyone.
         .............................................................................................................`)
    .setColor("#890000") //color of embed
    .setImage("https://mrkzgulfup.com/uploads/159794857547921.png")
message.channel.send(embed);
  }
});

client.login('NzA4MzQ5Nzc4NzQzNzg3NTIw.XrWEIw.aUwTWF07YRqT1RFdF6QhiyY3UsY');
