let Canvas = require('canvas');
let defaultWidth = 100;
let defaultHeight = 100;

module.exports = {
	setDefaultAvatar: setDefaultAvatar
};


function setDefaultAvatar(userName) {

	let canvas = new Canvas(defaultWidth, defaultHeight);
	let name = userName || '';

	let colours = ["#81C784", "#66BB6A", "#4CAF50", "#43A047", "#388E3C", "#2E7D32", "#AED581", "#64FFDA", "#1DE9B6"];

	let nameSplit = String(name).toUpperCase().split(' ');
	let initials;
	let context;
	let dataURI;


	if (nameSplit.length === 1) {
		initials = nameSplit[0] ? nameSplit[0].charAt(0) : '?';
	} else {
		initials = nameSplit[0].charAt(0) + nameSplit[1].charAt(0);
	}

	context = canvas.getContext("2d");

	context.fillStyle = colours[(Math.random() * colours.length - 1).toFixed(0)];
	context.fillRect(0, 0, canvas.width, canvas.height);
	context.font = Math.round(canvas.width / 2) + "px Arial";
	context.textAlign = "center";
	context.fillStyle = "#FFF";
	context.fillText(initials, defaultWidth / 2, defaultHeight / 1.5);

	dataURI = canvas.toDataURL();
	canvas = null;
	dataURI = dataURI.replace('data:image/png;base64,', '');
	return dataURI;
}