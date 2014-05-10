//Used to organize output for javascript examples
// ex. format.h1('Text to display)

function lines(typeChar) {
	console.log(Array(60).join(typeChar));
}

function h1(string) {
	lines('=');
	console.log(string);
	lines('=');
}
###About
This is a collection of code examples from the codeschool.com Javascript Track. Files are divided by area, and is merely intended for reference to javascript/jquery.
function h2(string) {
	lines('-');
	console.log(string+'\n')
}

exports.h1 = h1;
exports.h2 = h2;