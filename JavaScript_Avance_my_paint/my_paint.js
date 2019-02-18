// Variables

var canvas = document.getElementById('mycan');
var ctx = canvas.getContext('2d');
var rect = document.getElementById('rectangle');
var pen = document.getElementById('pen');
var line = document.getElementById('line');
var fullrect = document.getElementById('fullrect');
var circle = document.getElementById('circle');
var fullcircle = document.getElementById('fullcircle');
var eraser = document.getElementById('eraser');
var clear = document.getElementById('clear');
var x = 0;
var y = 0;
var drawRectOrCircleOrLine = true;
var canDraw = false;


var resetEvents = function() {

}

var draw = function() {
	function mouseDownDraw(e) {
		ctx.save();
		var x2 = e.clientX - canvas.offsetLeft;
		var y2 = e.clientY - canvas.offsetTop;
		var color = document.getElementById('color').value;
		var width = document.getElementById('width').value;
		canDraw = true;
		ctx.beginPath();
		ctx.lineWidth = width;
		ctx.strokeStyle = color;
		ctx.moveTo(x2, y2);
	}

	function mouseMoveDraw(e) {
		var x2 = e.clientX - canvas.offsetLeft;
		var y2 = e.clientY - canvas.offsetTop;
		if(canDraw){
			ctx.lineTo(x2, y2);
			ctx.stroke();
		}
	}

	function mouseUpDraw() {
		canDraw = false;
	}

	// Define events
	canvas.addEventListener('mousedown', mouseDownDraw);
	canvas.addEventListener('mousemove', mouseMoveDraw);
	canvas.addEventListener('mouseup', mouseUpDraw);

	// Remove events when I click on another button
	rect.addEventListener('click', function() {
		canvas.removeEventListener('mousedown', mouseDownDraw);
		canvas.removeEventListener('mousemove', mouseMoveDraw);
		canvas.removeEventListener('mouseup', mouseUpDraw);
	})

	line.addEventListener('click', function() {
		canvas.removeEventListener('mousedown', mouseDownDraw);
		canvas.removeEventListener('mousemove', mouseMoveDraw);
		canvas.removeEventListener('mouseup', mouseUpDraw);
	})

	fullrect.addEventListener('click', function() {
		canvas.removeEventListener('mousedown', mouseDownDraw);
		canvas.removeEventListener('mousemove', mouseMoveDraw);
		canvas.removeEventListener('mouseup', mouseUpDraw);
	})

	circle.addEventListener('click', function() {
		canvas.removeEventListener('mousedown', mouseDownDraw);
		canvas.removeEventListener('mousemove', mouseMoveDraw);
		canvas.removeEventListener('mouseup', mouseUpDraw);
	})

	fullcircle.addEventListener('click', function() {
		canvas.removeEventListener('mousedown', mouseDownDraw);
		canvas.removeEventListener('mousemove', mouseMoveDraw);
		canvas.removeEventListener('mouseup', mouseUpDraw);
	})



}

var drawRect = function() {
	function mouseClickOn(e) {
		var x2 = e.clientX - canvas.offsetLeft;
		var y2 = e.clientY - canvas.offsetTop;
		var color = document.getElementById('color').value;
		var width = document.getElementById('width').value;
		var w = x2 - x;
		var h = y2 - y;
		if(drawRectOrCircleOrLine) {
			x = x2;
			y = y2;
			drawRectOrCircleOrLine = false;
		} else {
			drawRectOrCircleOrLine = true;
			ctx.beginPath();
			ctx.lineWidth = width;
			ctx.strokeStyle = color;
			ctx.rect(x, y, w, h);
			ctx.stroke();
			ctx.closePath();
		}
	}

	// Define events
	canvas.addEventListener('click', mouseClickOn);

	// Remove events

	pen.addEventListener('click', function() {
		canvas.removeEventListener('click', mouseClickOn);
	})

	line.addEventListener('click', function() {
		canvas.removeEventListener('click', mouseClickOn);
	})

	fullrect.addEventListener('click', function() {
		canvas.removeEventListener('click', mouseClickOn);
	})

	circle.addEventListener('click', function() {
		canvas.removeEventListener('click', mouseClickOn);
	})

	fullcircle.addEventListener('click', function() {
		canvas.removeEventListener('click', mouseClickOn);
	})

	eraser.addEventListener('click', function() {
		canvas.removeEventListener('click', mouseClickOn);
	})
}

var drawCircle = function() {
	function mouseClickOn(e) {
		var x2 = e.clientX - canvas.offsetLeft;
		var y2 = e.clientY - canvas.offsetTop;
		var color = document.getElementById('color').value;
		var width = document.getElementById('width').value;
		var diam = Math.pow(x2 - x, 2) + Math.pow(y2 - y, 2);
		diam = Math.sqrt(diam);
		if(drawRectOrCircleOrLine) {
			x = x2;
			y = y2;
			drawRectOrCircleOrLine = false;
		} else {
			drawRectOrCircleOrLine = true;
			ctx.beginPath();
			ctx.lineWidth = width;
			ctx.strokeStyle = color;
			ctx.arc(x2, y2, diam, 0, 2*Math.PI);
			ctx.stroke();
		}
	}

	// Define events
	canvas.addEventListener('click', mouseClickOn);

	// Remove events
	pen.addEventListener('click', function() {
		canvas.removeEventListener('click', mouseClickOn);
	})

	line.addEventListener('click', function() {
		canvas.removeEventListener('click', mouseClickOn);
	})

	rect.addEventListener('click', function() {
		canvas.removeEventListener('click', mouseClickOn);
	})

	fullrect.addEventListener('click', function() {
		canvas.removeEventListener('click', mouseClickOn);
	})

	fullcircle.addEventListener('click', function() {
		canvas.removeEventListener('click', mouseClickOn);
	})

	eraser.addEventListener('click', function() {
		canvas.removeEventListener('click', mouseClickOn);
	})
}

var drawLine = function() {
	function mouseClickOn(e) {
		var x2 = e.clientX - canvas.offsetLeft;
		var y2 = e.clientY - canvas.offsetTop;
		var color = document.getElementById('color').value;
		var width = document.getElementById('width').value;
		if(drawRectOrCircleOrLine) {
			x = x2;
			y = y2;
			drawRectOrCircleOrLine = false;
		} else {
			drawRectOrCircleOrLine = true;
			ctx.beginPath();
			ctx.lineWidth = width;
			ctx.strokeStyle = color;
			ctx.moveTo(x, y);
			ctx.lineTo(x2, y2);
			ctx.stroke();
			ctx.closePath();
		}
	}

	// Define events
	canvas.addEventListener('click', mouseClickOn);

	// Remove events
	pen.addEventListener('click', function() {
		canvas.removeEventListener('click', mouseClickOn);
	})

	rect.addEventListener('click', function() {
		canvas.removeEventListener('click', mouseClickOn);
	})

	fullrect.addEventListener('click', function() {
		canvas.removeEventListener('click', mouseClickOn);
	})

	circle.addEventListener('click', function() {
		canvas.removeEventListener('click', mouseClickOn);
	})

	fullcircle.addEventListener('click', function() {
		canvas.removeEventListener('click', mouseClickOn);
	})

	eraser.addEventListener('click', function() {
		canvas.removeEventListener('click', mouseClickOn);
	})
}

var drawFullRect = function() {
	function mouseClickOn(e) {
		var x2 = e.clientX - canvas.offsetLeft;
		var y2 = e.clientY - canvas.offsetTop;
		var color = document.getElementById('color').value;
		var width = document.getElementById('width').value;
		var w = x2 - x;
		var h = y2 - y;
		if(drawRectOrCircleOrLine) {
			x = x2;
			y = y2;
			drawRectOrCircleOrLine = false;
		} else {
			drawRectOrCircleOrLine = true;
			ctx.beginPath();
			ctx.strokeStyle = color;
			ctx.fillStyle = color;
			ctx.rect(x, y, w, h);
			ctx.fill();
			ctx.stroke();
			ctx.closePath();
		}
	}

	// Define events
	canvas.addEventListener('click', mouseClickOn);

	// Remove events
	pen.addEventListener('click', function() {
		canvas.removeEventListener('click', mouseClickOn);
	})

	line.addEventListener('click', function() {
		canvas.removeEventListener('click', mouseClickOn);
	})

	rect.addEventListener('click', function() {
		canvas.removeEventListener('click', mouseClickOn);
	})

	circle.addEventListener('click', function() {
		canvas.removeEventListener('click', mouseClickOn);
	})

	fullcircle.addEventListener('click', function() {
		canvas.removeEventListener('click', mouseClickOn);
	})

	eraser.addEventListener('click', function() {
		canvas.removeEventListener('click', mouseClickOn);
	})
}

var drawFullCircle = function() {
	function mouseClickOn(e) {
		var x2 = e.clientX - canvas.offsetLeft;
		var y2 = e.clientY - canvas.offsetTop;
		var color = document.getElementById('color').value;
		var diam = Math.pow(x2 - x, 2) + Math.pow(y2 - y, 2);
		diam = Math.sqrt(diam);
		if(drawRectOrCircleOrLine) {
			x = x2;
			y = y2;
			drawRectOrCircleOrLine = false;
		} else {
			drawRectOrCircleOrLine = true;
			ctx.beginPath();
			ctx.strokeStyle = color;
			ctx.fillStyle = color;
			ctx.arc(x2, y2, diam, 0, 2*Math.PI);
			ctx.fill();
			ctx.stroke();
		}
	}

	// Define events
	canvas.addEventListener('click', mouseClickOn);

	// Remove events
	pen.addEventListener('click', function() {
		canvas.removeEventListener('click', mouseClickOn);
	})

	line.addEventListener('click', function() {
		canvas.removeEventListener('click', mouseClickOn);
	})

	rect.addEventListener('click', function() {
		canvas.removeEventListener('click', mouseClickOn);
	})

	fullrect.addEventListener('click', function() {
		canvas.removeEventListener('click', mouseClickOn);
	})

	circle.addEventListener('click', function() {
		canvas.removeEventListener('click', mouseClickOn);
	})

	eraser.addEventListener('click', function() {
		canvas.removeEventListener('click', mouseClickOn);
	})
}

var erase = function() {
	function mouseDownDraw(e) {
		var x2 = e.clientX - canvas.offsetLeft;
		var y2 = e.clientY - canvas.offsetTop;
		var width = document.getElementById('width').value;
		canDraw = true;
		ctx.beginPath();
		ctx.lineWidth = width;
		ctx.moveTo(x2, y2);
	}

	function mouseMoveDraw(e) {
		var x2 = e.clientX - canvas.offsetLeft;
		var y2 = e.clientY - canvas.offsetTop;
		if(canDraw){
			ctx.lineTo(x2, y2);
			ctx.globalCompositeOperation = 'destination-out';
			ctx.stroke();
		}
	}

	function mouseUpDraw() {
		canDraw = false;
	}

	// Define events
	canvas.addEventListener('mousedown', mouseDownDraw);
	canvas.addEventListener('mousemove', mouseMoveDraw);
	canvas.addEventListener('mouseup', mouseUpDraw);
}

clear.addEventListener('click', function() {
	ctx.restore();
	console.log("oo");

})

function choose() {
	pen.addEventListener('click', draw);
	line.addEventListener('click', drawLine);
	rect.addEventListener('click', drawRect);
	fullrect.addEventListener('click', drawFullRect);
	circle.addEventListener('click', drawCircle);
	fullcircle.addEventListener('click', drawFullCircle);
	eraser.addEventListener('click', erase);
}

choose();