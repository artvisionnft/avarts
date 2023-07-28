function randomLinesTwoDots(x1, y1, x2, y2, dotSpread, numDots) {
    // Draw random dots around the starting point
    for (let i = 0; i < numDots; i++) {
      let x = x1 + random(-dotSpread, dotSpread);
      let y = y1 + random(-dotSpread, dotSpread);
      point(x, y);
    }

    // Draw random dots around the ending point
    for (let i = 0; i < numDots; i++) {
      let x = x2 + random(-dotSpread, dotSpread);
      let y = y2 + random(-dotSpread, dotSpread);
      point(x, y);
    }

    // Connect the dots with lines
    for (let i = 0; i < numDots; i++) {
    	stroke(color(random(255), random(255), random(255), random(255)));
      let x3 = x1 + random(-dotSpread, dotSpread);
      let y3 = y1 + random(-dotSpread, dotSpread);
      let x4 = x2 + random(-dotSpread, dotSpread);
      let y4 = y2 + random(-dotSpread, dotSpread);
      line(x3, y3, x4, y4);
    }
}