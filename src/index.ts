import * as dotenv from "dotenv";
import { Client, Events, GatewayIntentBits } from "discord.js";

dotenv.config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, (readyClienty) => {
  console.log(`Ready! Logged in as ${readyClienty.user.tag}`);
});

client.login(process.env.TOKEN);
