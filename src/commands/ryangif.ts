import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { config } from "../config";
import { TenorData } from "../types/tenor";

export default {
  data: new SlashCommandBuilder()
    .setName("ryangif")
    .setDescription("Replies with a Ryan Gosling Gif! You're just like him!")
    .addStringOption((option) =>
      option
        .setName("type")
        .setDescription("Search for a specific type of Ryan Gosling GIF")
        .setRequired(false)
    ),
  execute: async (interaction: CommandInteraction) => {
    const type = interaction.options.get("type")?.value as string;
    const response = await fetch(
      !type
        ? `https://tenor.googleapis.com/v2/search?q=ryan gosling&key=${config.TENOR_KEY}&client_key=my_test_app&limit=50`
        : `https://tenor.googleapis.com/v2/search?q=${type} ryan gosling&key=${config.TENOR_KEY}&client_key=my_test_app&limit=50`
    );
    const json: TenorData = await response.json();

    //The gif can be based on the 'type' option input provided by the user or not
    const randomGif =
      json.results[Math.floor(Math.random() * json.results.length)];
    await interaction.reply(`You're just like him! ${randomGif.itemurl}`);
  },
};
