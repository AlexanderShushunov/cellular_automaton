class Program {
	constructor(rules) {
		if (!Array.isArray(rules)) {
			throw new Error("input is required and have to be Array of Rules");
		}
		checkRules(rules);
		this._rules = rules;
	}

	apply(vicinity) {
		for (let rule of this._rules) {
			if (rule.applicable(vicinity)) {
				return rule.newState;
			}
		}
		return vicinity.center;
	}
}

function checkRules(rules) {
	for (let first of rules) {
		for (let second of rules.filter(r => r != first)) {
			if (first.isConflict(second)) {
				throw new Error({
					msg: "rules conflict",
					first,
					second
				})
			}
		}
	}
}

export default Program;