const { stripIndents } = require('common-tags');

module.exports = {
	name: 'ping',
	run: async (client, message, args) => {
		const msg = await message.channel.send('OWO');
		msg.edit(stripIndents`
			__**Calculated Ping**__
			**Client:** ${Math.round(message.client.ping)}ms
			**Round trip:** ${msg.createdTimestamp - message.createdTimestamp}ms
		`);
	}
}