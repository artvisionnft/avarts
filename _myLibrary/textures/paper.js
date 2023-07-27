function addPaperTexture(grainSize) {
  for (let x = 0; x < width; x += grainSize) {
    for (let y = 0; y < height; y += grainSize) {
      const shade = color(240 + random(-20, 20)); // Slightly vary the color to simulate paper grain
      stroke(shade);
      point(x, y);
    }
  }
}