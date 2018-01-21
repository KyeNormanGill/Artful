const { embedColour } = require('../config.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'avatar',
	run: (client, message, args) => {
		const embed = new MessageEmbed().setColor(embedColour);
		const user = client.parseUser(message, args) || message.author;
		embed.setImage(user.displayAvatarURL({ size: 1024 }))
		return message.edit({ embed });
	}
}