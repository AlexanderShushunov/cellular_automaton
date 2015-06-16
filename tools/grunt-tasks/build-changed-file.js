module.exports = function (grunt, options) {

	grunt.config.merge({
		"babel": {
			oneScript: {
				files: []
			}
		},
		"copy": {
			oneFile: {
				files: []
			}
		},
		watch: {
			script: {
				files: options.srcDir + "/js/**/*.js",
				tasks: ["babel:oneScript"]
			},
			html: {
				files: options.srcDir + "/**/*.html",
				tasks: ["copy:oneFile"]
			},
			options: {
				livereload: true,
				spawn: false
			}
		}
	});

	var TARGET_TO_HANDLER = {
		"script": function (filepath) {
			babelizeTo(filepath, makeDestPath(filepath));
		},
		"html": function (filepath) {
			copyTo(filepath, makeDestPath(filepath));
		}
	};

	grunt.event.on("watch", function (action, filepath, target) {
		TARGET_TO_HANDLER[target](filepath);
	});

	function babelizeTo(src, dest) {
		var files = {};
		files[dest] = src;
		console.log(files);
		grunt.config("babel.oneScript.files", files);
	}

	function copyTo(src, dest) {
		var files = {};
		files[dest] = src;
		grunt.config("copy.oneFile.files", files);
	}

	function makeDestPath(filepath) {
		return options.outputDir + filepath.substring(options.srcDir.length);
	}

};