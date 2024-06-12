import {
  EmbedBuilder,
  SlashCommandBuilder,
  CommandInteraction,
} from "discord.js";
import { commands } from "..";

export default {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Shows all commands!"),
  execute: async (interaction: CommandInteraction) => {
    const embed = new EmbedBuilder().setTitle("Commands!").setFields(
      Object.values(commands).map((command) => {
        return {
          name: `/${command.data.name}`,
          value: `${command.data.description}`,
        };
      })
    );
    await interaction.reply({ embeds: [embed] });
  },
};
