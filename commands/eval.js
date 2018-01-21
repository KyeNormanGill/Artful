module.exports = {
	name: 'eval',
	run: (client, message, args) => {
		return Promise.all([
			new Promise((resolve, reject) => {
				let ev;
		
				try {
					ev = eval(args);
		
					if (ev && typeof ev.then === 'function' && typeof ev.catch === 'function') {
						ev.then(resolve).catch(reject);
						return;
					}
					resolve(ev);
				} catch (err) {
					reject(err);
				}
			})
		]).then(resolutions => {
			let out;
			const res = resolutions[0];
			if (typeof res === 'object' && typeof res !== 'string') {
				out = require('util').inspect(res);
				if (typeof out === 'string' && out.length > 1900) {
					out = res.toString();
				}
			} else {
				out = res;
			}
			return message.edit(`**Code:**\n\`\`\`js\n${args}\n\`\`\`**Success:**\n\`\`\`js\n${out}\n\`\`\``);
		}).catch(err => {
			return message.edit(`**Code:**\n\`\`\`js\n${args}\n\`\`\`**An error occured:**\n\`\`\`js\n${err.message || err}\n\`\`\``);
		});

	}
}