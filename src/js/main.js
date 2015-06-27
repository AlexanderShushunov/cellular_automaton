import jQuery from "jquery";
import Rule from "automation/rule";
import Letter from "automation/letter";
import Vicinity from "automation/vicinity";
import Tape from "automation/tape";
import Program from "automation/program";
import Automation from "automation/automation";
import MetaLetter from "automation/meta-letter";

jQuery(document).ready(() => {
	jQuery("#bla").text("bla-");
	let vicinity = new Vicinity(Letter.space(), Letter.space(), Letter.space());
	window.a = new Rule(vicinity, Letter.space());

	window.type = Tape.byStrings("|||||");

	console.log(window.type.toString());

	window.rule1 = new Rule(Vicinity.byStrings("^", "|", "|"), new Letter("^"));
	window.rule2 = new Rule(Vicinity.byStrings("^", "|", "^"), new Letter("^"));


	window.meta = new MetaLetter([new Letter("|"), new Letter("^")]);
	window.metRule = new Rule(new Vicinity(new Letter("^"), new Letter("|"), window.meta), new Letter("^"));

	window.program = new Program([window.metRule]);

	window.automation = new Automation(window.program);

	console.log(window.automation.produce(window.type).toString());



});