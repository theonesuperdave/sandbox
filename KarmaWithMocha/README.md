# Instructions and Setup
1. Install NodeJS
* Install base dependencies (npm) - (FRESH INSTALL ONLY)
  *	[Require](https://www.npmjs.com/package/karma-requirejs)
  * [Grunt](http://gruntjs.com/installing-grunt)~
  * [Karma](http://karma-runner.github.io/1.0/intro/installation.html)
  * [PhantomJS](https://github.com/karma-runner/karma-phantomjs-launcher)
  *	[Mocha](https://www.npmjs.com/package/karma-mocha)
* Setup Grunt CLI~ - 
  `npm install -g grunt-cli`
* Setup Karma CLI - 
  `npm install -g karma-cli`
* [Optional] Add global node modules to PATH environment variable (Windows only): `%AppData%\npm`
* Run: `npm install`
* Create and configure the karma.conf.js
	* Configure frameworks
	* Add necessary files and/or patterns
		* App
		* Specs
		* requireJS config (include this in the browser)
	* Configure any preprocessors (*.html)
	* Configure browsers to be used in testing
	* Setup autoWatch or singleRun
* Create and configure the gruntfile.js~
* Create test harness (*.html)
	* Setup the file to be created below as the 'data-main' for requireJS
	* Include lib dependencies
	* Don't forget the div for mocha: `<div id="mocha"></div>`
* Add config (*.js) - this is where we setup requireJS and such
	* baseUrl: '/base' - Karma serves up all file to this location (base/[app] to match existing source files)
	* Add the following snippet to add all test files as a requireJS dependency
	
	```javascript
	var tests = [];  
	if (window.__karma__) {  
	    for (var file in window.__karma__.files) {  
	        if (window.__karma__.files.hasOwnProperty(file)) {  
	            if (/specs\.js$/.test(file)) {  
	                tests.push(file);  
	            }  
	        }  
	    }  
	}
	```
	* Add the 'tests' above as a dependency to requireJS config (`deps: tests,`)
	* Setup any necessary requireJS paths and/or shims
	  
	  Ex. 
	    ```javascript
	    paths: {
	        should: 'node_modules/should/should',
	        sinon: 'node_modules/sinon/lib/sinon'
	    },
	    shim: {
	        'sinon': { exports: 'sinon'}
	    },
	    ```
	
~_Optional Step: if using the grunt task runner_  
_Mocha doesn't play very well directly with requireJS_
