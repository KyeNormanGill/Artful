const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const { token } = require('./../config.js');
const { Client, Collection } = require('discord.js');
const eventDirectory = path.join(__dirname, '..', 'events');
const commandDirectory = path.join(__dirname, '..', 'commands');

module.exports = class Artful extends Client {
	constructor(options = {}) {
		super(options);

		this.commands = new Collection();
		this.owner = '189696688657530880';
		this.prefix = 'a.';
		this.token = token;
	}

	async setupEvents() {
		const readdir = promisify(fs.readdir);
		const events = await readdir(eventDirectory);

		for (const event of events) {
			this.on(event.replace('.js', ''), (...args) => require(path.join(eventDirectory, event))(this, ...args));
		}
	}

	async setupCommands() {
		const readdir = promisify(fs.readdir);
		const commands = await readdir(commandDirectory);

		for(const command of commands) {
			const cmd = require(path.join(commandDirectory, command));

			this.commands.set(cmd.name, cmd);
		}
	}

	parseUser(message, args) {
		return message.client.users.get(args)
			|| message.client.users.find(userino => userino.username.toLowerCase().includes(args.toLowerCase()))
			|| message.mentions.users.first()
			|| null;
	}

	parseMember(message, args) {
		return message.guild.members.get(args)
			|| message.guild.members.find(userino => userino.displayName.toLowerCase().includes(args.toLowerCase()))
			|| message.mentions.members.first()
			|| null;
	}

	login() {
		return super.login(this.token);
	}
}