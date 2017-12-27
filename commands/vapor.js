function _charToFullWidth(char) {
	const c = char.charCodeAt(0);
	return c >= 33 && c <= 126
		? String.fromCharCode((c - 33) + 65281)
		: char;
}

function _stringToFullWidth(string) {
	return string.split('').map(_charToFullWidth).join('');
}

module.exports = {
	name: 'vapor',
	run: (client, message, args) => {
		if (!args) return;
		return message.edit(_stringToFullWidth(args));
	}
}