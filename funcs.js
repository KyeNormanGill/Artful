const { promisify } = require('util');
const fs = require('fs');
const path = require('path');
const eventDirectory = path.join(__dirname, 'events');
const commandDirectory = path.join(__dirname, 'commands');

module.exports = {
	setupEvents: async client => {
		const readdir = promisify(fs.readdir);
		const events = await readdir(eventDirectory);

		for (const event of events) {
			client.on(event.replace('.js', ''), (...args) => require(path.join(eventDirectory, event))(client, ...args));
		}
	},
	setupCommands: async client => {
		const readdir = promisify(fs.readdir);
		const commands = await readdir(commandDirectory);

		for(const command of commands) {
			const cmd = require(path.join(commandDirectory, command));

			client.commands.set(cmd.name, cmd);
		}
	},
	parseUser: (message, args) => {
		return message.client.users.get(args)
			|| message.client.users.find(userino => userino.username.toLowerCase().includes(args.toLowerCase()))
			|| message.mentions.users.first();
	}
}