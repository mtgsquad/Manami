const { MessageEmbed } = require("discord.js");
const fs = require('fs')
const economy = require('../../economy');
const shop = require('../../shop')
const embed = require('../../embeds')
module.exports = {
name: "items",
description: "see how many items you have",
run: async(client, message, args) => {
    const target = message.mentions.users.first() || message.author
    const guildId = message.guild.id
    const userId = target.id
    const items = await shop.getItems(guildId, userId)
const itemsList = []

    if (!items.length) return embed.error('No Items', 'you do not have any items', message)
items.forEach(obj => {
    if (itemsList.some(i=>i.name == obj.name)) return
    itemsList.push(
        {name: `${obj.name}`, value: `${obj.description}`}
    )
});
        embed.fieldListEmbed(target.username, itemsList, message)
}
}