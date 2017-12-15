const Client = require('./structures/Client.js');
const { token } = require('./config.js');
const { setupEvents, setupCommands } = require('./funcs.js');

const client = new Client();

setupEvents(client);
setupCommands(client);

client.login(token);

process.on('unhandledRejection', console.error);