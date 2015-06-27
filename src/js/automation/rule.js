import Letter from "automation/letter";
import Vicinity from "automation/vicinity";

class Rule {
	constructor(vicinity, newState) {
		if (!(vicinity instanceof Vicinity)) {
			throw new Error("vicinity is required and have to be Vicinity");
		}
		if (!(newState instanceof Letter)) {
			throw new Error("newState is required and have to be Letter");
		}
		this._vicinity = vicinity;
		this._newState = newState;
	}

	applicable(vicinity) {
		return this._vicinity.matches(vicinity);
	}

	isConflict(other) {
		return this._vicinity.matches(other._vicinity);
	}

	get newState() {
		return this._newState;
	}
}

export default Rule;