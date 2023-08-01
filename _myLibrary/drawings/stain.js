let mainCanvas, seed;

let arrayColors = [];
let arrayVisited = [];

let Q = [];
let beginQ = 0;
let endQ = 0;

function create2DArray(rows, cols) {
  arrayColors = new Array(rows);
  arrayVisited = new Array(rows);
  for (let i = 0; i < rows; i++) {
    arrayColors[i] = new Array(cols);
    arrayVisited[i] = new Array(cols);
  }
}

function setup() {
	seed = int(fxrand() * 9999999);

	restart();
}

function restart() {
	pixelDensity(1);
	randomSeed(seed);
	noiseSeed(seed);

	maxCanv = min(windowWidth, windowHeight);

	mainCanvas = createCanvas(maxCanv, maxCanv);
	//angleMode(DEGREES);

	minX = max(maxCanv * 0.05,40);
	maxX = maxCanv - minX;
	minY = minX;
	maxY = maxCanv - minY;
	margin = minX;

	create2DArray(maxCanv, maxCanv);
	for (let i = 0; i < maxCanv; i++) {
		arrayColors[i][i] = color(0,0,0);
	}

	background(0, 0, 0);
	addPaperTexture(1);

	strokeWeight(2);
	fill(color('#' + $fx.getRawParam("color_id")));
	stroke(color('#' + $fx.getRawParam("color_id").slice(0,6)));
	square(minX-2, minY-2, (maxX - minX) + 4, 4);


	x = getIntRandom(minX, maxX);
	y = getIntRandom(minY, maxY);
	bfs(color(floor(random(255)),floor(random(255)),floor(random(255)),floor(random(255))), x, y, 0);

	for (let x = 0; x < maxCanv; x++) {
		for (let y = 0; y < maxCanv; y++) {
			if (arrayVisited[x][y] != undefined && arrayColors[x][y] != undefined) {
					stroke(arrayColors[x][y]);
					point(x,y);
			}
		}
	}

	fxpreview();
}



function bfs(initialColor, iniX, iniY, idB) {
	beginQ = 0;

	let x = iniX; 
	let y = iniY; 
	Q[beginQ] = [x, y];

	arrayColors[x][y] = initialColor;
	arrayVisited[x][y] = true;

	stroke(arrayColors[x][y]);
	point(x,y);

	endQ = 1;

	//dfs(initialColor, iniX, iniY, idB, 200);

	let xoff = 0;
	let r = 0;
	let g = 0;
	let b = 0;

	noiseDetail(8);
	while (beginQ < endQ) {
		xoff += 0.001;
		let currentPointX = Q[beginQ][0];
		let currentPointY = Q[beginQ][1];
		beginQ++;

		r = noise(xoff + 1);
		g = noise(xoff + 5000);
		b = noise(xoff + 10000);

		//console.log("Perlin r " + r + " g " + g + " b " + b);

		//up point
		x = currentPointX;
		y = currentPointY + 1;
		if (y < maxY && arrayVisited[x][y] === undefined) {

			if (random(5) < 3) {
				

				let currentColor = arrayColors[currentPointX][currentPointY];
				let newColor = 0;
				if (alpha(currentColor) > 0) {
					if (random(5) < 3) {
						newColor = color(red(initialColor) * r, green(initialColor) * g, blue(initialColor) * b, alpha(currentColor) -1);
					} else {
						newColor = color(red(initialColor) * r, green(initialColor) * g, blue(initialColor) * b, alpha(currentColor));
					}
					arrayVisited[x][y] = idB;
					arrayColors[x][y] = newColor;

					//stroke(arrayColors[x][y]);
					//point(x,y);
					Q[endQ++] = [x,y];
				} 
			}	 
		} 

		//down point
		x = currentPointX;
		y = currentPointY - 1;
		if (y > minY && arrayVisited[x][y] === undefined) {
			if (random(5) < 3) {
				

				let currentColor = arrayColors[currentPointX][currentPointY];
				let newColor = 0;
				if (alpha(currentColor) > 0) {
					if (random(5) < 3) {
						newColor = color(red(initialColor) * r, green(initialColor) * g, blue(initialColor) * b, alpha(currentColor) -1);
					} else {
						newColor = color(red(initialColor) * r, green(initialColor) * g, blue(initialColor) * b,  alpha(currentColor));
					}
					arrayVisited[x][y] = idB;
					arrayColors[x][y] = newColor;

					//stroke(arrayColors[x][y]);
					//point(x,y);
					Q[endQ++] = [x,y];
				} 
			}
		}

		//left point
		x = currentPointX - 1;
		y = currentPointY;
		if (x > minX && arrayVisited[x][y] === undefined) {
			if (random(5) < 3) {
				

				let currentColor = arrayColors[currentPointX][currentPointY];
				let newColor = 0;
				if (alpha(currentColor) > 0) {
					if (random(5) < 3) {
						newColor = color(red(initialColor) * r, green(initialColor) * g, blue(initialColor) * b, alpha(currentColor) -1);
					} else {
						newColor = color(red(initialColor) * r, green(initialColor) * g, blue(initialColor) * b, alpha(currentColor));
					}
					arrayVisited[x][y] = idB;
					arrayColors[x][y] = newColor;

					//stroke(arrayColors[x][y]);
					//point(x,y);
					Q[endQ++] = [x,y];
				}
			} 
		}

		//right point
		x = currentPointX + 1;
		y = currentPointY;
		if (x < maxX && arrayVisited[x][y] === undefined) {
			if (random(5) < 3) {


				let currentColor = arrayColors[currentPointX][currentPointY];
				let newColor = 0;
				if (alpha(currentColor) > 0) {
					if (random(5) < 3) {
						newColor = color(red(initialColor) * r, green(initialColor) * g, blue(initialColor) * b, alpha(currentColor) -1);
					} else {
						newColor = color(red(initialColor) * r, green(initialColor) * g, blue(initialColor) * b, alpha(currentColor));
					}
					arrayVisited[x][y] = idB;
					arrayColors[x][y] = newColor;

					//stroke(arrayColors[x][y]);
					//point(x,y);
					Q[endQ++] = [x,y];
				} 
			}
		}

	}
}

function getIntRandom(minN, maxN) {
	return floor(random(minN, maxN));
}


function addPaperTexture(grainSize) {
  for (let x = 0; x < width; x += grainSize) {
    for (let y = 0; y < height; y += grainSize) {
      const shade = color(240 + random(-20, 20)); // Slightly vary the color to simulate paper grain
      stroke(shade);
      point(x, y);
    }
  }
}

function keyTyped() {
	if (key === "s") {
		save(seed + ".png");
	}
}

function windowResized() {
	restart();
}