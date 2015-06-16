module.exports = function (grunt) {

	// load nodejs modules from package.json
	require("load-grunt-tasks")(grunt);

	var options = {
		srcDir: "../src",
		outputDir: "../output"
	};

	// base configuration
	grunt.initConfig({});

	//<editor-fold desc="Tasks loader">
	var path = require("path");

	function loadGruntConfigPart(gruntConfigPath) {
		var absolutePath = path.resolve(gruntConfigPath);
		require(absolutePath)(grunt, options);
	}
	//</editor-fold>

	// load tasks
	grunt.file.expand("grunt-tasks/*.js").forEach(loadGruntConfigPart);

	grunt.registerTask("rebuild", ["clean:output", "build"]);
};