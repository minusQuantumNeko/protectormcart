const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const gg = await message.channel.send('Измерение пинга ⏳');
    setTimeout(() => {
        gg.edit(`${message.member}, ваш пинг! ${m.createdTimestamp - message.createdTimestamp}мс`)
      }, 4000);
}
module.exports.help = {
    name: "ping"
}
