import dotenv from "dotenv";
dotenv.config();

export default {
  RESERVOIR_ICON:
    "https://cdn.discordapp.com/icons/872790973309153280/0dc1b70867aeeb2ee32563f575c191c6.webp?size=4096",
  ALERT_COOLDOWN: 60 * 30, // 30 minute cooldown
  PRICE_CHANGE_OVERRIDE: 0.1, // 10% price change
  ALERT_ENABLED: { listings: true, sales: true, floor: true, bid: true }, // enable alerts
  TRACKED_CONTRACTS: ["0x7afe30cb3e53dba6801aa0ea647a0ecea7cbe18d"],
  CHANNEL_IDS: {
    mainChannel: process.env.DISCORD_MAIN_CHANNEL as string,
    listingChannel: process.env.DISCORD_LISTING_CHANNEL as string,
    salesChannel: process.env.DISCORD_SALES_CHANNEL as string
  },
  ALERT_CONTRACT: "0x7afe30cb3e53dba6801aa0ea647a0ecea7cbe18d",
  APPLICATION_ID: process.env.DISCORD_APP_ID as string,
  REDIS_HOST: process.env.REDIS_HOST ?? "127.0.0.1",
  REDIS_PORT: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT) : 6379
};
