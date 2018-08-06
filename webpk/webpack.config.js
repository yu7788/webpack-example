
//entry  output  module/rules  plugins devserver



var path = require('path');

module.exports = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js'
  },
  module: {
	  rules: [
	    {
	      test: /\.js$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: 'babel-loader',
	      query: {
	        presets: ['es2015','react']
	      }
	    },
	    {
	        test: /\.css$/,
	        use: [ 'style-loader', 'css-loader' ]
	    },
	    {
	        test: /\.(png|jpg|gif)$/,
	        use: [
	          {
	            loader: 'file-loader',
	            options: {}
	          }
	        ]
	      }
	  ]
	},
	devServer: {
	  contentBase: path.join(__dirname, "dist"),
	  compress: true,
	  port: 9000,
	  inline:true
	}
};

