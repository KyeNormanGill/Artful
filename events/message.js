module.exports = (client, message) => {
	if (message.author.id !== client.owner) return;
	if (!message.content.startsWith(client.prefix)) return;
	
	const commandName = message.content.slice(client.prefix.length).split(' ')[0].toLowerCase();	

	const command = client.commands.get(commandName);

	if (!command) return;

	const args = message.content.split(' ').slice(1).join(' ');

	try {
		command.run(client, message, args);
	} catch(e) {
		message.reply(`Command ${command.name} errored. See logs for more info.`);
		console.error(e);
	}
	
}