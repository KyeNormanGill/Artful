const { parseUser } = require('../funcs.js');

module.exports = {
	name: 'avatar',
	run: (client, message, args) => {
		message.reply(args ? parseUser(args).avatarURL : message.author.avatarURL);
	}
}