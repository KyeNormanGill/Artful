const { embedColour } = require('../config.js');
const { parseUser } = require('../funcs.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'avatar',
	run: (client, message, args) => {
		const embed = new MessageEmbed().setColor(embedColour);
		if (!args) {
			embed.setImage(message.author.displayAvatarURL({ size: 1024 }));
			return message.edit({ embed });
		}
		const user = parseUser(message, args);
		if (!user) return;
		embed.setImage(user.displayAvatarURL({ size: 1024 }))
		return message.edit({ embed });
	}
}