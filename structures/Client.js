const { Client, Collection } = require('discord.js');

module.exports = class Artful extends Client {
	constructor(options = {}) {
		super(options);

		this.commands = new Collection();
		this.owner = '189696688657530880';
		this.prefix = 'a.';
	}
}