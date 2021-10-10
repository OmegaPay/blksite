// server/index.js
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const prefix = "+";
const token = "ODk2Mjk1NTE3NTk4OTA4NDg3.YWFCPw.A4tlULyPIIcdyxvy-0wIo5eVIr" + "M";

function thingo(id) {
  var fantomEmbed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Fantom #' + id)
	.setURL('https://fantoms.art/')
	.setDescription('A cute little ghost')
	.setImage('https://mint.fantoms.art/imagesa/'+id+'.png')
	.setTimestamp()

  return fantomEmbed;
}

function cyberthingo(id) {
  var fantomEmbed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Cyber Fantom #' + id)
	.setURL('https://cyber.fantoms.art/')
	.setDescription('A hardcore cyberpunk ghost. And it\'s not a phase.')
	.setImage('https://raw.githubusercontent.com/Pokesi/blksite/main/images/'+id+'.png')
	.setTimestamp()

  return fantomEmbed;
}

let interval;
client.on('message', async msg => {
  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  switch (command) {
    case "fantom":
      var id2 = args[0];
      var temp = thingo(id2);
      msg.channel.send({ embeds: [temp] });
      break;
    case "cyber":
      var id3 = args[0];
      var temp = cyberthingo(id3);
      msg.channel.send({ embeds: [temp] });
      break;
    case "rarity":
      var eyes = args[1];
      var mouth = args[2];
      try {
          var bg = args[3].toLowerCase();
      } catch {
          var bg = "none";
      }
      var rarity = 0.2;
      if (eyes == "1" || eyes == "10") { rarity = 0.15 } else { rarity = 0.1 };
      if (mouth == "7") {rarity += 0.1} else {rarity += 0.15};
      switch (bg) {
              case "city": 
                rarity += 0.4;
              case "motel":
                rarity += 0.2;
              case "lake":
                rarity += 0.1;
              case "bridge":
                rarity += 0.1;
              case "clouds":
                rarity += 0.07;
              case "kitten":
                rarity += 0.03;
              case "none":
                rarity += 0;
      }
      msg.channel.send("Your rarity is: " + rarity.toString() + ". Remember; the lower the better!");
      break;
    case "help":
      msg.channel.send("Currently supported commands: \n `+fantom [id]` - get info about FTMOPR #[id] \n `+cyber [id]` - get info about CYBER #[id] \n `+rarity [body] [eyes] [mouth] [CYBER ONLY:background]` - get the rarity of your FTMOPR/CYBER see `+rarityinfo` \n `+rarityinfo` - get info about the rarity calculation process");
      break;
    case "rarityinfo":
      msg.channel.send("Body aliases: the [body] in `+rarity` should just be the color of the body \n [eyes] should be the ID number of the eyes. The IDs can be found here https://github.com/fantomsopera/generate/. \n [mouth] can be found in the same way. \n [background] should be the closest one you can find in #rarity.");
      break;
  }
});

app.get("/api", (req, res) => {
  res.json({ message: "running...", description: "blockarcade cabinet", attributes: [{trait_type:  "main", value: "cabinet"}] });
});

app.get("/", (req, res) => {
  res.json({ message: "NFT Thingo running :P", description: "blockarcade cabinet", attributes: [{trait_type:  "main", value: "cabinet"}] });
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


client.login(token);
