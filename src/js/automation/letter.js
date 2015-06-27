const SPACE = "^";

class Letter {

	static space() {
		return new Letter(SPACE);
	}

	constructor(name) {
		if (!name) {
			throw new Error("name is required");
		}
		this._name = name;
	}

	matches(other) {
		return this.name === other.name;
	}

	get name() {
		return this._name;
	}
}

export default Letter;