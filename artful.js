const Client = require('./structures/Client.js');

const client = new Client();

client.setupEvents();
client.setupCommands();
client.login();

process.on('unhandledRejection', console.error);