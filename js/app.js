"use strict";

requirejs.config({
	"baseUrl": "js",
	"paths": {
		"jquery": "//yastatic.net/jquery/2.1.4/jquery"
	}
});

// Load the main app module to start the app
requirejs(["main"]);