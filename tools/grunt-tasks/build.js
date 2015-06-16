module.exports = function (grunt, options) {
	grunt.config.merge({
		"babel": {
			allScripts: {
				files: [{
					expand: true,
					cwd: options.srcDir + "/js",
					src: ["**/*.js"],
					dest: "../output/js"
				}]
			}
		},
		"copy": {
			allResources: {
				files: [{
					expand: true,
					cwd: options.srcDir,
					src: "**/*.html",
					dest: options.outputDir
				}]
			}
		}
	});

	grunt.registerTask("build", ["babel:allScripts", "copy:allResources"]);
};