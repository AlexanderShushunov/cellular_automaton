module.exports = function (grunt) {
	grunt.config.merge({
		"babel": {
			options: {
				modules: "amd",
				sourceMap: true
			}
		}
	});
};