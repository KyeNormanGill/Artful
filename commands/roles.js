const { MessageEmbed } = require('discord.js');
const { embedColour } = require('../config.js');
const { stripIndents } = require('common-tags');

module.exports = {
	name: 'roles',
	run: (client, message, args) => {
		const embed = new MessageEmbed().setColor(embedColour);
		if (!args) {
			embed.setDescription(stripIndents`
				**Roles for ${message.guild.name}**
				
				${message.guild.roles.map(r => r.toString()).slice(1).join(' ')}
			`)

			return message.edit({ embed });
		}

		const user = client.parseMember(message, args);
		if (!user) return;

		embed.setDescription(stripIndents`
			**Roles for ${user.displayName}**
			
			${user.roles.map(r => r.toString()).slice(1).join(' ')}
		`);

		message.edit({ embed });
	}
}