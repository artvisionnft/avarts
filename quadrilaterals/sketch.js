let mainCanvas, seed;
let listcolors = [
					[[212, 126, 150], [34, 139, 34], [255, 200, 87], [0, 128, 128], [211, 182, 198], [253, 247, 227]],
					[[0, 255, 255], [255, 105, 180], [255, 215, 0], [255, 69, 0], [0, 255, 0], [255, 0, 255]],
					[[218, 112, 214], [255, 219, 88], [135, 206, 235], [255, 132, 124], [152, 255, 152], [255, 215, 0]],
					[[106, 13, 173], [255, 82, 82], [0, 191, 255], [253, 190, 59], [0, 128, 128], [255, 192, 203]],
					[[255, 0, 0], [255, 165, 0], [255, 255, 0], [0, 128, 0], [135, 206, 235], [147, 112, 219]],
					[[244, 234, 213], [0, 119, 190], [255, 214, 198], [176, 224, 230], [255, 127, 80], [169, 169, 169]],
					[[210, 210, 210], [180, 180, 180], [140, 140, 140], [100, 100, 100], [60, 60, 60], [20, 20, 20]],
					[[80, 0, 0], [120, 0, 0], [160, 0, 0], [200, 0, 0], [255, 0, 0], [0, 0, 0]],
					[[255, 204, 204], [204, 229, 255], [204, 255, 204], [255, 230, 204], [237, 204, 255], [255, 255, 204]],
					[[255, 0, 0], [255, 102, 0], [255, 204, 0], [255, 153, 51], [255, 51, 0], [255, 255, 0]]
				];

function setup() {
	seed = int(fxrand() * 9999999);

	restart();
	//createCanvas(800,800);
	//restart();
}

function restart() {
	pixelDensity(1);
	randomSeed(seed);
	noiseSeed(seed);

	palette = 1;
	if ($fx.getRawParam("select_id")) {
		palette = parseInt($fx.getRawParam("select_id") -1);
	}

	maxCanv = min(windowWidth, windowHeight);
	/*mainCanvas = createCanvas(windowWidth, windowWidth / 3 * 4);
	if (height > windowWidth) {
		resizeCanvas(windowHeight / 4 * 3, windowHeight);
	}*/
	mainCanvas = createCanvas(maxCanv, maxCanv);

	/*if ($fx.getRawParam("color_id")) {
		background('#' + $fx.getRawParam("color_id").slice(0,6));
	}*/


	sizeObjects = floor((maxCanv - maxCanv * 0.1) / $fx.getParam('number_id'));

	numberSquares = $fx.getParam('number_id');

	margin = (maxCanv - numberSquares * sizeObjects) / 2;

	xoff = 0;
	pixelDensity(1);
	loadPixels();
	for (i = 0; i < maxCanv; i++) {
		for (j = 0; j < maxCanv; j++) {
			idx = (j + i * maxCanv) * 4;
			r = 200+random(55);
			//pixels[idx + 0] = noise(xoff) * 100;
			pixels[idx + 0] = r;
			pixels[idx + 1] = r;
			pixels[idx + 2] = r;
			pixels[idx + 3] = 255;

			if (i == j)
				xoff += 0.01;
		}
	}
	updatePixels();

	texture = 1;
	if ($fx.getRawParam("background_id")) {
		texture = parseInt($fx.getRawParam("background_id"));
	}


	if (texture == 1) {
		drawFloweryPixelArtBackground(color('#' + $fx.getRawParam("color_id")));
	} else if (texture == 2) {
		drawHarmonicBackground(color('#' + $fx.getRawParam("color_id")));
	} else if (texture == 3) {
		drawHarmonicBackground2(color('#' + $fx.getRawParam("color_id")));
	} else if (texture == 4) {
		drawNothingBackground(color('#' + $fx.getRawParam("color_id")));
	} else  if (texture == 5) {
		colorTmp = color('#' + $fx.getRawParam("color_id"));
		drawGradientBackground(color('#' + $fx.getRawParam("color_id")), color(0, 0, 0, alpha(colorTmp)));
	} else {
		colorTmp = color('#' + $fx.getRawParam("color_id"));
		drawGradientBackground2(color(red(colorTmp), green(colorTmp), blue(colorTmp), 30), color(0, 0, 0, 30));
	}
	

	//drawRandomWaveNoiseTexture('#' + $fx.getRawParam("color_id").slice(0,6));
	fill('#' + $fx.getRawParam("color_id"));
	strokeWeight(2);
	stroke(color('#' + $fx.getRawParam("color_id").slice(0,6)));
	square(margin-4, margin-4, maxCanv - margin * 2 + 8);

	transparency = $fx.getRawParam("transparency_id");

	//push();
	//rotate(45);

	iYes = floor(random(0.99)*(numberSquares))
	jYes = floor(random(0.99)*(numberSquares))

	colorColumn = 0;
	for (i = 0; i < numberSquares; i++) {

		colorLinha = colorColumn;
		for (j = 0; j < numberSquares; j++) {

			if (iYes == i && jYes == j || random(100) >= $fx.getParam('perc_id')) {
				
				colorchoose = floor(random(0.99)*6);
				//stroke(0);
				//strokeWeight(3);
				//noStroke();
				strokeWeight(1);
				stroke(0);
				fill(listcolors[palette][colorchoose][0], listcolors[palette][colorchoose][1], listcolors[palette][colorchoose][2], transparency);
				//square(i*32, j*32, 26);

				//square(margin+i*sizeObjects, margin+j*sizeObjects, sizeObjects);
				drawShape(margin+i*sizeObjects, margin+j*sizeObjects, sizeObjects);
				//drawRandomPolygon(margin+i*sizeObjects, margin+j*sizeObjects, sizeObjects);

				strokeWeight(2);
				stroke(0);
				//square(margin+i*sizeObjects+5, margin+j*sizeObjects+5, sizeObjects-10);

				colorchoose = floor(random(0.99)*6);

				fill(listcolors[palette][colorchoose][0], listcolors[palette][colorchoose][1], listcolors[palette][colorchoose][2]);

				//circle((margin+i*sizeObjects + margin+i*sizeObjects+sizeObjects)/2, ((margin+j*sizeObjects + margin+j*sizeObjects + sizeObjects) / 2), sizeObjects - sizeObjects * 0.45);

				//triangle(j*32-5, i*32+32, midx, i*32+32+5, j*32+5, i*32+32);


				//hexagon(margin+i*sizeObjects, margin+j*sizeObjects, sizeObjects);
			}

			colorLinha = (colorLinha + 1) % 2;
		}

		colorColumn = (colorColumn + 1) % 2;
	}



	fxpreview();
}

function drawShape(transX, transY, s) {
  //stroke(255);
  //strokeWeight(5);
  //fill('rgba(255, 255, 100, .25)');
  push();
  translate(transX, transY);
  beginShape(TESS);
	vertex(0, random(s));
	vertex(random(s), 0);
	vertex(s, random(s));
	vertex(random(s), s);
  endShape(CLOSE); 
  pop();
}

function drawNothingBackground(bgColor) {
  r = red(bgColor);
  g = green(bgColor);
  b = blue(bgColor);

  gridSize = 10;
  for (x = 0; x < width; x += gridSize) {
    for (y = 0; y < height; y += gridSize) {
      randomR = random(r - 20, r + 20); // Randomize the red channel
      randomG = random(g - 20, g + 20); // Randomize the green channel
      randomB = random(b - 20, b + 20); // Randomize the blue channel
    }
  }
}

function drawHarmonicBackground(bgColor) {
  numLines = 50; // Number of lines to draw
  lineSpacing = height / numLines; // Spacing between lines
  r = red(bgColor);
  g = green(bgColor);
  b = blue(bgColor);

  background(bgColor);

  gridSize = 10;
  for (x = 0; x < width; x += gridSize) {
    for (y = 0; y < height; y += gridSize) {
      randomR = random(r - 20, r + 20); // Randomize the red channel
      randomG = random(g - 20, g + 20); // Randomize the green channel
      randomB = random(b - 20, b + 20); // Randomize the blue channel
    }
  }

  for (i = 0; i < numLines; i++) {
    lineWidth = map(i, 0, numLines - 1, 1, 10); // Map line width based on position
    alpha = map(i, 0, numLines - 1, 40, 160); // Map alpha value based on position
    y = i * lineSpacing;

    strokeWeight(lineWidth);
    stroke(r, g, b, alpha);
    line(0, y, width, y);
  }
}

function drawHarmonicBackground2(bgColor) {
  numLines = 50; // Number of lines to draw
  lineSpacing = height / numLines; // Spacing between lines
  r = red(bgColor);
  g = green(bgColor);
  b = blue(bgColor);

  background(bgColor);

  gridSize = 10;
  for (x = 0; x < width; x += gridSize) {
    for (y = 0; y < height; y += gridSize) {
      randomR = random(r - 20, r + 20); // Randomize the red channel
      randomG = random(g - 20, g + 20); // Randomize the green channel
      randomB = random(b - 20, b + 20); // Randomize the blue channel
    }
  }

  for (i = 0; i < numLines; i++) {
    lineWidth = map(i, 0, numLines - 1, 1, 5); // Map line width based on position
    alpha = map(i, 0, numLines - 1, 50, 100); // Map alpha value based on position
    y = i * lineSpacing;

    strokeWeight(lineWidth);
    stroke(r, g, b, alpha);
    line(0, y, width, y);

    numCircles = 20; // Number of circles to draw
    circleSpacing = width / numCircles; // Spacing between circles

    for (j = 0; j < numCircles; j++) {
      circleSize = map(j, 0, numCircles - 1, 4, 15); // Map circle size based on position
      x = j * circleSpacing + circleSpacing / 2;

      noFill();
      stroke(r, g, b, alpha);
      ellipse(x, y, circleSize, circleSize);
    }
  }
}

function drawFloweryPixelArtBackground(bgColor) {
  gridSize = 10; // Size of each pixel
  r = red(bgColor);
  g = green(bgColor);
  b = blue(bgColor);

  background(bgColor);

  for (x = 0; x < width; x += gridSize) {
    for (y = 0; y < height; y += gridSize) {
      randomR = random(r - 20, r + 20); // Randomize the red channel
      randomG = random(g - 20, g + 20); // Randomize the green channel
      randomB = random(b - 20, b + 20); // Randomize the blue channel
      alpha = 10;

      flowerColor = color(randomR, randomG, randomB, alpha);
      petalSize = gridSize / 2;

      // Draw petals of the flower
      fill(flowerColor);
      noStroke();
      ellipse(x + petalSize, y + petalSize, petalSize, petalSize);
      ellipse(x + petalSize, y + gridSize - petalSize, petalSize, petalSize);
      ellipse(x + gridSize - petalSize, y + petalSize, petalSize, petalSize);
      ellipse(x + gridSize - petalSize, y + gridSize - petalSize, petalSize, petalSize);

      // Draw center of the flower
      fill(flowerColor);
      ellipse(x + gridSize / 2, y + gridSize / 2, petalSize, petalSize);
    }
  }
}

function drawGradientBackground(color1, color2) {
  gridSize = 10;
  r = red(color1);
  g = green(color1);
  b = blue(color1);
  for (x = 0; x < width; x += gridSize) {
    for (y = 0; y < height; y += gridSize) {
      randomR = random(r - 20, r + 20); // Randomize the red channel
      randomG = random(g - 20, g + 20); // Randomize the green channel
      randomB = random(b - 20, b + 20); // Randomize the blue channel
    }
  }

  for (x = 0; x < width; x += gridSize) {
    for (y = 0; y < height; y += gridSize) {
      inter = map(dist(x, y, mouseX, mouseY), 0, dist(0, 0, width, height), 0, 1);
      c = lerpColor(color1, color2, inter);
      fill(c);
      noStroke();
      rect(x, y, 50, 50);
    }
  }
}

function drawGradientBackground2(color1, color2) {
  gridSize = 10;
  r = red(color1);
  g = green(color1);
  b = blue(color1);
  for (x = 0; x < width; x += gridSize) {
    for (y = 0; y < height; y += gridSize) {
      randomR = random(r - 20, r + 20); // Randomize the red channel
      randomG = random(g - 20, g + 20); // Randomize the green channel
      randomB = random(b - 20, b + 20); // Randomize the blue channel
    }
  }

  waveFrequency = 0.03;
  waveAmplitude = 50;
  marginSquares = 2;
  rectSize = 10;
  for (x = marginSquares; x < width - marginSquares; x += rectSize + marginSquares) {
    for (y = marginSquares; y < height - marginSquares; y += rectSize + marginSquares) {
      waveOffsetX = sin((y + frameCount) * waveFrequency) * waveAmplitude;
      waveOffsetY = cos((x + frameCount) * waveFrequency) * waveAmplitude;
      inter = map(dist(x + waveOffsetX, y + waveOffsetY, mouseX, mouseY), 0, dist(0, 0, width, height), 0, 1);
      c = lerpColor(color1, color2, inter);
      fill(c);
      noStroke();
      rect(x + waveOffsetX, y + waveOffsetY, rectSize, rectSize);
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