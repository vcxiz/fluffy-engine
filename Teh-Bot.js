
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(config.prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  switch (command) {
  case "ping" :
    message.channel.send('Pong!');
    break;
  case "meow" :
    let member = message.mentions.members.first();
    message.channel.send("Sending a meow!")
    member.send("Meow!").catch(message.channel.send("Uh oh, something has gone wrong while trying to meow."))
    break;
   case "shard"
      message.channel.send("Shard: " + client.shard)
      break;
}
});

client.login(config.token);
