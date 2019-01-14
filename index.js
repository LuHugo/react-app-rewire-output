const path = require('path');
module.exports = function(options = {}) {
	return function(config, env) {
		if (env === 'production') {
			if (options.path) {
				const outputPath = path.resolve(options.path);
				require('react-scripts/config/paths').appBuild = outputPath;
				options.path = outputPath;
			}
			config.output = Object.assign(config.output, options);
		}
		return config;
	};
};
