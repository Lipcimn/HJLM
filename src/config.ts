import * as dotenv from "dotenv";

dotenv.config();

const { DISCORD_TOKEN, TENOR_KEY } = process.env;

if (!DISCORD_TOKEN) {
  throw new Error("Missing DISCORD_TOKEN");
}

export const config = {
  DISCORD_TOKEN,
  TENOR_KEY,
};
