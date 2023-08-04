function drawSquaresBackground() {
	let squareSize = maxCanv * 0.01;
	let spaceSize = squareSize * 0.1;

	let spaceSquareSize = squareSize + spaceSize;
	let numberSquares = floor(width / (spaceSquareSize));
	let totalSpaceOccupied = numberSquares * (spaceSquareSize);
	let marginLR = (width - totalSpaceOccupied) / 2;

	stroke(230,230,230);
	fill(210,210,210);
	for (let y = 0; y < height; y += spaceSquareSize) {
		for (let x = marginLR; x < width; x+= spaceSquareSize) {
			rect(y,x,squareSize,squareSize);
		}
	}
}

function drawSpacedSquaresBackground() {
	let squareSize = floor(maxCanv * 0.04);
	let spaceSize = floor(squareSize * 0.25);

	let spaceSquareSize = squareSize + spaceSize;
	let numberSquares = floor(width / (spaceSquareSize));
	let totalSpaceOccupied = numberSquares * (spaceSquareSize) - spaceSize;
	let marginLR = floor((width - totalSpaceOccupied) / 2);

	noStroke();

	let xoff = random(255);

	let arraySquaresStop = new Array(numberSquares);
	let s;

	for (let y = marginLR; y+squareSize <= height; y += spaceSquareSize) {
		s = 0;
		for (let x = marginLR; x+squareSize <= width; x += spaceSquareSize) {
			if (!arraySquaresStop[s]) {
				let colorSquare = floor(200 + 55 * noise(xoff + x * y));
				let colorObj = color(colorSquare, colorSquare, colorSquare, 200);
				fill(colorObj);
				rect(x,y,squareSize,squareSize);


				/*colorSquare = colorSquare - 10;
				colorObj = color(colorSquare, colorSquare, colorSquare, 200);
				fill(colorObj);
				rect(x+3,y+3,squareSize,squareSize);*/

				xoff += 1;

				if (random(100) < 15) {
					arraySquaresStop[s] = true;
				}
			}

			s += 1;
		}
	}
}