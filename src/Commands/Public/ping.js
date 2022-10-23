const {SlashCommandBuilder, CommandInteraction, PermissionFlagsBits} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Pong"),
    async execute(interaction, client) {
        
        interaction.reply({content: "Pong", ephemeral: true})
    },
};