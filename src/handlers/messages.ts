import { Message } from "discord.js";

/** Cursed words filter */
const nsfwWords: string[] = [
  "caralho",
  "krl",
  "buceta",
  "bosta",
  "puta",
  "putaria",
  "corno",
  "viado",
  "fuck",
  "shit",
  "asshole",
  "damn",
  "bastard",
  "cunt",
  "whore",
  "piss",
  "cock",
  "dick",
  "pussy",
  "tits",
  "titties",
  "boobs",
  "ass",
  "arse",
  "bollocks",
  "bollok",
  "bastardo",
  "merda",
  "porra",
  "cacete",
  "cacetinha",
  "cacetona",
];

export const messagesHandler = async (message: Message) => {
  if (message.author.bot) return;

  if (nsfwWords.some((word) => message.content.toLowerCase().includes(word))) {
    await message.reply("No cursed words here! Ryan Gosling woudn't be proud!");
    await message.delete();
  }
};
