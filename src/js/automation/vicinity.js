import Letter from "automation/letter";

class Vicinity {

	static byStrings(left, center, right) {
		return new Vicinity(new Letter(left), new Letter(center), new Letter(right));
	}

	constructor(left, center, right) {
		if (!(left instanceof Letter)
				|| !(center instanceof Letter)
				|| !(right instanceof Letter)) {
			throw new Error("all parameters are required and have to be Letters");
		}
		this._left = left;
		this._center = center;
		this._right = right;
	}

	matches(other) {
		return this.left.matches(other.left)
				&& this.center.matches(other.center)
				&& this.right.matches(other.right);
	}

	get left() {
		return this._left;
	}

	get center() {
		return this._center;
	}

	get right() {
		return this._right;
	}
}

export default Vicinity;