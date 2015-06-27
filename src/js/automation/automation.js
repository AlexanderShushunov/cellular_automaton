import Tape from "automation/tape"
import Program from "automation/program";

const DEFAULT_MAX_STEPS_COUNT = 1000;

class Automation {
	constructor(program) {
		if (!(program instanceof Program)) {
			throw new Error("program is required and have to be Program");
		}
		this._program = program;
	}

	step(type) {
		let letters = [];
		for (let vicinity of type) {
			let newLetter = this._program.apply(vicinity);
			letters.push(newLetter);
		}
		return new Tape(letters);
	}

	produce(type, maxStepsCount = DEFAULT_MAX_STEPS_COUNT) {
		let stepsCount = 0;
		let prevTape = new Tape([]);
		let nextTape = type;
		while (stepsCount < maxStepsCount && !prevTape.equals(nextTape)) {
			prevTape = nextTape;
			nextTape = this.step(prevTape);
		}
		return nextTape;
	}

}

export default Automation;