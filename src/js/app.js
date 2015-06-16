require.config({
	"baseUrl": "js",
	"paths": {
		"jquery": "../../lib/jquery-2.1.4"
	}
});

// Load the main app module to start the app
requirejs(["main"]);