var karma = window.__karma__;
var tests = [];
if (karma) {
    // take all of the files harvested from the karma 
    //    setup, and push them as dependencies to requireJS
    for (var file in karma.files) {
        if (karma.files.hasOwnProperty(file)) {
            if (/spec\.js$/.test(file)) {
                tests.push(file);
            }
        }
    }
}

requirejs.config({
    baseUrl: '/base/js',
    paths: {
        should: 'node_modules/should/should',
        sinon: 'node_modules/sinon/lib/sinon'
    },

    deps: tests,

    shim: {
        'sinon': { exports: 'sinon'}
    },

    // This allows us to run karma or mocha directly
    callback: function () { if (karma) { karma.start(); } return; }
});

//define('sinon', function () { return sinon; });

// This piece is needed if running mocha stand-alone
if (karma == undefined) {
    // a bit tedious to make this file list dynamic, but it's possible
    //    since we are using grunt to kick off mocha:
    //    http://tbusser.net/articles/js-unit-testing-part-01/
    require([
      'specs/sample-basic.spec.js',
      //'specs/sample-requireJS.spec.js' // not ready for prime-time; mocha config doesn't like requireJS right now
    ], function () {
        mocha.run();
    });
}
