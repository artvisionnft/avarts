let inc = 0.1;
let scl = 1;
let cols, rows;

let points = 0;
let distances = [];
let nPoints = 20;

class PointXY {
  constructor(xs, ys) {
    this.x = xs;
    this.y = ys;
  }
}

function setup() {
  createCanvas(800, 600);
  cols = floor(width);
  rows = floor(height);
  pixelDensity(1);
  
  points = new Array(nPoints);
  distances = new Array(nPoints);
  for (let i = 0; i < nPoints; i++) {
    points[i] = new PointXY(random(width), random(height));
  }
}

function draw() {
  loadPixels();
  let n = 1;
  let maxDistPoints = 0;

  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      let index = (x + y * width) * 4;
      
      for (let i = 0; i < nPoints; i++) {
        distances[i] = (x - points[i].x) * (x - points[i].x) + (y - points[i].y) * (y - points[i].y);
        if (distances[i] > maxDistPoints) {
          maxDistPoints = distances[i];
        }
          
          //(x - points[i].x) * (x - points[i].x) + (y - points[i].y) * (y - points[i].y);
      }
      
      let sortedPoints = sort(distances);
      
      //let sortedPoints = distances;
      
      //sortedPoints.sort();
      
      let addNoise = sortedPoints[n];
      let r = 255;
      let g = 255;
      let b = 255;
      
      maxDistPoints = 30000;

      pixels[index + 0] = floor(map(addNoise, 0, maxDistPoints, 50, 200));
      pixels[index + 1] = floor(map(addNoise, 0, maxDistPoints, 20, 100));
      pixels[index + 2] = floor(map(addNoise, 0, maxDistPoints, 0, 255));
      pixels[index + 3] = floor(map(addNoise, 0, maxDistPoints, 255, 30));
    }
  }
  updatePixels();
  
  for (let i = 0; i < nPoints; i++) {
    stroke(255,0,0);
    strokeWeight(4);
    point(points[i].x, points[i].y);
  }
  
  noLoop();
}