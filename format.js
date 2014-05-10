
function lines(typeChar) {
	console.log(Array(60).join(typeChar));
}

function h1(string) {
	lines('=');
	console.log(string);
	lines('=');
}

function h2(string) {
	lines('-');
	console.log(string+'\n')
}

exports.h1 = h1;
exports.h2 = h2;