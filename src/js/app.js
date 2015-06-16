require.config({
	"baseUrl": "js",
	"paths": {
		"jquery": "../lib/jquery/jquery"
	}
});

// Load the main app module to start the app
requirejs(["main"]);