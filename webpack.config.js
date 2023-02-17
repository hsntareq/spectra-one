const defaultConfig     = require( '@wordpress/scripts/config/webpack.config' );
const BrowserSyncPlugin = require( 'browser-sync-webpack-plugin' );

module.exports = env => {
	return {
		...defaultConfig,

		module: {
			...defaultConfig.module
		},

		entry: {
			editor: './src/editor.js',
		},

		plugins: [
			...defaultConfig.plugins,
		]
	};
};

