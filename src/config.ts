import * as dotenv from "dotenv";

dotenv.config();

const { DISCORD_TOKEN, DISCORD_CLIENT_ID, TENOR_KEY, GOOGLE_AI_API_KEY } =
  process.env;

if (!DISCORD_TOKEN || !DISCORD_CLIENT_ID || !TENOR_KEY || !GOOGLE_AI_API_KEY) {
  throw new Error("Missing environment variables");
}

export const config = {
  DISCORD_TOKEN,
  DISCORD_CLIENT_ID,
  TENOR_KEY,
  GOOGLE_AI_API_KEY,
};
