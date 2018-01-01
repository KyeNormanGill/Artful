const { embedColour } = require('../config.js');
const { parseUser } = require('../funcs.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'avatar',
	run: (client, message, args) => {
		const embed = new MessageEmbed().setColor(embedColour);
		const user = parseUser(message, args) || message.author;
		embed.setImage(user.displayAvatarURL({ size: 1024 }))
		return message.edit({ embed });

	}
}