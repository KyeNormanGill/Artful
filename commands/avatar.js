const { parseUser } = require('../funcs.js');
const { MessageAttachment } = require('discord.js');

module.exports = {
	name: 'avatar',
	run: (client, message, args) => {
		if (!args) return message.edit(new MessageAttachment(message.author.displayAvatarURL({ format: 'png', size: 1024 }), 'file.jpg'));
		const user = parseUser(message, args);
		if (!user) return;
		return message.edit(new MessageAttachment(user.displayAvatarURL({ format: 'png', size: 1024 }), 'file.jpg'));
	}
}