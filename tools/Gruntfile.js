module.exports = function (grunt) {

	// load nodejs modules from package.json
	require("load-grunt-tasks")(grunt);

	// base configuration
	grunt.initConfig({
		watch: {
			all: {
				files: "../**"
			},
			options: {
				livereload: true,
				spawn: false
			}
		}
	});
};