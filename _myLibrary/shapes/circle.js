class Circle {
	constructor(x, y, radius) {
		this.x = x;
		this.y = y;
		this.radius = radius;
	}

	collides(xC, yC, radiusC) {
		if ((this.x - xC) * (this.x - xC) + (this.y - yC) * (this.y - yC) <= (radiusC + this.radius) * (radiusC + this.radius)) {
			return true;
		} 
		return false;
	}
}