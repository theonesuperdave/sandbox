// Karma config

// Setup our environment for local debugging as necessary
var browserLaunchRetryLimit = 2;
var sourcePreprocessors = ['coverage'];

function isDebug(argument) {
    return argument === '--debug';
}

if (process.argv.some(isDebug)) {
    browserLaunchRetryLimit = 0;
    sourcePreprocessors = []; // code coverage messes with the content, so don't mix with debugging
}

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'requirejs', 'sinon', 'should'],


        // list of files / patterns to load in the browser
        files: [
            { pattern: 'js/**/*.js', included: false }, // Get the source
            { pattern: 'specs/**/*.spec.js', included: false }, // Pick up our test files

            //{ pattern: './node_modules/should/should.js', included: false },
            { pattern: 'specRunner.js', included: true }, //requireJS plumbing
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'specRunner.html': ['html2js'],
            './js/*.js': sourcePreprocessors // pickup any JS files in the root
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha', 'coverage'],

        coverageReporter: {
            // specify a common output directory
            dir: 'build/reports/coverage',
            includeAllSources: true,
            reporters: [
                // reporters not supporting the `file` property
                //{ type: 'html', subdir: 'report-html' },
                // reporters supporting the `file` property, use `subdir` to directly
                // output them in the `dir` directory
                { type: 'html', subdir: './html' },
                { type: 'text', subdir: './text', file: 'report.txt' },
                { type: 'text-summary', subdir: './text', file: 'report-summary.txt' },
                { type: 'json', subdir: './json', file: 'report.json' },
                { type: 'json-summary', subdir: './json', file: 'report-summary.json' },
            ]
        },


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS', 'Chrome', 'IE'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    });
};

