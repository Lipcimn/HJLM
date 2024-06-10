import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { config } from "../config";
import { TenorData, Result } from "../types/tenor";

export default {
  data: new SlashCommandBuilder()
    .setName("ryan")
    .setDescription("Replies with a Ryan Gosling Gif! You're just like him!"),
  async execute(interaction: CommandInteraction) {
    await fetch(
      `https://tenor.googleapis.com/v2/search?q=ryangosling&key=${config.TENOR_KEY}&client_key=my_test_app&limit=30`
    )
      .then((res) => res.json())
      .then(async (data: TenorData) => {
        const randomGif: Result =
          data.results[Math.floor(Math.random() * data.results.length)];
        await interaction.reply(
          `You're just like him! ${randomGif.media_formats.gif.url}`
        );
      })
      .catch((err) => console.log(err));
  },
};
