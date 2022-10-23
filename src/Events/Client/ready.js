const { Client } = require("discord.js");

module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    console.log(`The bot (${client.user.tag}) is online`);
  },
};
