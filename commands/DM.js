const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    await.delete();
    if(message.author.id !== '548913423346434060') return;
           message.guild.members.forEach( member => {
               member.send(message.content.substr(3));
               message.delete();
           }}

        
module.exports.help = {
name:"dm"
}
