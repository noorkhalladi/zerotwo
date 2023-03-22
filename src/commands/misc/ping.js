module.exports = {
    name: 'ping',
    description:'Rplies with your ping!',
    execute: async (client, interaction) => {
        try {
            const message= await interaction.reply({content:"Pong!", fetchReply: true });

            await interaction.editReply({content:`Pong!\nBot Latency: \`${message.createdTimestamp - interaction.createdTimestamp}\`, Websocket Latency:\`${client.ws.ping}\`` } );

        } catch (error) {
            console.log("something went wrong => " , error);
        }
      

    },
};