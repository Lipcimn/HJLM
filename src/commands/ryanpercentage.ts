import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("ryanpercentage")
    .setDescription("Replies with percentage of how Ryan Gosling you are!"),
  execute: async (interaction: CommandInteraction) => {
    await interaction.reply(
      `${interaction.user} is ${Math.floor(Math.random() * 100)}% Ryan Gosling`
    );
  },
};
