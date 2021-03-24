const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = "!";

client.once("ready", () => {
  console.log("Breadloaf is online");
});

const images = [
  "./breadloafs/breadloaf.png",
  "./breadloafs/breadloaf2.png",
  "./breadloafs/breadloaf3.png",
  "./breadloafs/breadloaf4.png",
  "./breadloafs/breadloaf5.png",
  "./breadloafs/breadloaf6.png",
  "./breadloafs/breadloaf7.png",
  "./breadloafs/breadloaf8.png",
  "./breadloafs/breadloaf9.png",
  "./breadloafs/breadloaf14.png",
];

const babyimgs = [
  "./breadloafs/breadloaf10.png",
  "./breadloafs/breadloaf11.png",
  "./breadloafs/breadloaf12.png",
  "./breadloafs/breadloaf13.png",
  "./breadloafs/baby1.png",
  "./breadloafs/baby2.png",
  "./breadloafs/baby3.png",
  "./breadloafs/baby4.png",
  "./breadloafs/baby5.png",
];

const toebeans = [
  "./breadloafs/toes1.png",
  "./breadloafs/toes2.png",
  "./breadloafs/toes3.png",
  "./breadloafs/toes4.png",
  "./breadloafs/toes5.png",
];

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    message.channel.send("pong!");
  } else if (command == "breadloaf") {
    const img = images[Math.floor(Math.random() * images.length)];
    message.channel.send(`${message.author} here's a breadloaf`, {
      files: [
        {
          name: img,
          attachment: img,
        },
      ],
    });
  } else if (command == "babyloafy") {
    const img = babyimgs[Math.floor(Math.random() * babyimgs.length)];
    message.channel.send(`${message.author} here's a baby loaf`, {
      files: [
        {
          name: img,
          attachment: img,
        },
      ],
    });
  } else if (command == "toebeans") {
    const img = toebeans[Math.floor(Math.random() * toebeans.length)];
    message.channel.send(`${message.author} here are some loafy beans`, {
      files: [
        {
          name: img,
          attachment: img,
        },
      ],
    });
  }
});

client.login("ODE3MDc1MDgwMDA1ODEyMjc0.YEEOdw.Gv84sMGP0AURCmqG6-jtG0P3uqk");
