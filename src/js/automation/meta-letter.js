import Letter from "automation/letter";

class MetaLetter extends Letter {

	constructor(letters) {
		if (!Array.isArray(letters)) {
			throw new Error("letters is required and have to be Array of Letters");
		}
		this._letters = letters;
		super("meta:" +
				letters.map(letter => letter.name).
						reduce((prev, cur) => {
							return prev + " " + cur
						}, ""));
	}

	matches(otherLatter) {
		for (let letter of this._letters) {
			if (letter.matches(otherLatter)) {
				return true;
			}
		}
		return false;
	}

}

export default MetaLetter;