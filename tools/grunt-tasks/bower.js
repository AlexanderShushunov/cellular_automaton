module.exports = function (grunt, options) {
	grunt.config.merge({
		bower: {
			install: {
				options: {
					targetDir: "./../output/lib"
				}
			}
		}
	});
};