var redGamePiece;

function startGame() {
	myGameArea.start();
	redGamePiece = component();
}

function component() {
	this.width = 30;
	this.height = 30;
	this.x = 30;
	this.y = 200;
	this.color = "red";
	ctx = myGameArea.context;
	ctx.fillStyle = color;
	ctx.fillRect(this.x, this.y, this.width, this.height);
}

var myGameArea = {
	canvas: document.createElement("canvas"),
	start: function() {
		this.canvas.width = 500;
		this.canvas.height = 500;
		this.context = this.canvas.getContext("2d");
		document.body.insertBefore(this.canvas, document.body.childNodes[0]);
	}
}