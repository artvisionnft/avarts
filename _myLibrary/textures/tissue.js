function addTissueTexture() {
  for (let x = 0; x < width; x += 5) {
    for (let y = 0; y < height; y += 5) {
      const shade = color(255, 220 + random(-10, 10)); // Slightly vary the alpha value to simulate texture
      fill(shade);
      noStroke();
      ellipse(x, y, 2, 2);
    }
  }
}