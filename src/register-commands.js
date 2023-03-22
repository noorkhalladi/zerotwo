require('dotenv').config();
const { REST, Routes} = require("discord.js");
module.exports ={
    
}
const commands =[
    {
        name: 'hey',
        description:'replies with hey!',
       
    }
];

const rest = new REST({ version: '10'}).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Registring slash commands... ');   
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), {body: commands}
        )
        console.log('Slash commands were registred succesfully!');


    } catch (error) {
        console.log(`there was an error ${error}`);
    }
})();