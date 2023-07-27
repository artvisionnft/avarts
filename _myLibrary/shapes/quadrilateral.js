class Quadrilateral {
	constructor(xs, ys) {
		this.xs = xs;
		this.ys = ys;
	}

	computeBBox() {
		this.minLeft = 999999;
		this.maxRight = -1;
		this.maxTop = -1;
		this.minBottom = 999999;
		for (let i = 0; i < this.xs.length; i++) {
			if (this.xs[i] < this.minLeft) {
				this.minLeft = this.xs[i];
			}
			if (this.xs[i] > this.maxRight) {
				this.maxRight = this.xs[i];
			}
			if (this.ys[i] < this.minBottom) {
				this.minBottom = this.ys[i];
			}
			if (this.ys[i] > this.maxTop) {
				this.maxTop = this.ys[i];
			}
		}
	}
}