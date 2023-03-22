require('dotenv').config();
const {Client, IntentsBitField, Message, ActivityType} = require("discord.js");
const ping = require('./commands/misc/ping');
const client = new Client ({
  intents : [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('ready', (c) =>{
  console.log(`${c.user.tag} is online`)
  client.user.setActivity({
    name: 'With your feelings',
    type: ActivityType.Playing,
  })
})
client.on('interactionCreate', (interaction) =>{
  if(!interaction.isChatInputCommand()) return;

  if(interaction.commandName === 'hey'){
    interaction.reply('heyy!');
  }

  
});
client.on('messageCreate', (message) => {
  if (message.author.bot){
    return;
  }
  if (message.content === "*hi"){
    message.reply("hey!");
  }
  client.user.setActivity("with your feelings", {
    type: "PLAYING",
  });
});

client.login(process.env.TOKEN);
