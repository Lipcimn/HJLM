import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { setTimeout } from "node:timers/promises";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { config } from "../config";

const genAI = new GoogleGenerativeAI(config.GOOGLE_AI_API_KEY);

export default {
  data: new SlashCommandBuilder()
    .setName("chat")
    .setDescription("Chat with Ryan Gosling!")
    .addStringOption((option) =>
      option.setName("string").setDescription("Your message").setRequired(true)
    ),
  execute: async (interaction: CommandInteraction) => {
    await interaction.deferReply();
    await setTimeout(5_000);
    const prompt = interaction.options.get("string")?.value as string;
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: `I'm ${interaction.user.username}` }],
        },
        {
          role: "model",
          parts: [{ text: "I'm Ryan Gosling, so i answer like him" }],
        },
      ],
      generationConfig: {
        maxOutputTokens: 500,
      },
    });
    try {
      const result = await chat.sendMessage(prompt);
      const response = await result.response;
      const text = response.text();
      await interaction.editReply(text);
    } catch (err) {
      console.log(err);
      await interaction.reply(
        `Somehow i can't answer that, ${interaction.user}... my bad.`
      );
    }
  },
};
