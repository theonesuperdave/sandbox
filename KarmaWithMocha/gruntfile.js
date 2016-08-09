module.exports = function (grunt) {
    var port = 8000;
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        connect: {
            server: {
                options: {
                    port: port,
                    livereload: true,
                    debug: true,
                    base: '..',
                    open: {
                        target: 'http://localhost:' + port,
                        appName: 'chrome'
                    }
                }
            }
        },

        watch: {
            all: {
                options: {
                    livereload: true
                },
                files: [
                    './specs/specRunner.js',
                    './specs/**/*.spec.js',
                    './specs/**/specRunner.html',
                    './App/**/*.ts',
                    'gruntfile.js'
                ],
                tasks: ['jshint', 'mocha']
            }
        },

        mocha: {
            all: ['./specRunner.html'],
            options: {
                reporter: 'Spec',
                ui: 'bdd',
                ignoreLeaks: false,
                log: true,
                logErrors: true,
                //run: true // this is handled in the specRunner.js
                files: './specs/**/*.spec.js'
            }
        },

        karma: {
            options: {
                // Configuration options that tell Karma how to run
                configFile: 'karma.conf.js'
            },

            dev: {
                browsers: ['PhantomJS'],
                // On our local environment we want to test all the things!
                //browsers: ['Chrome', 'Firefox', 'PhantomJS']
                //autoWatch: true,
                singleRun: true
            },

            // For production, that is to say, our CI environment, we'll
            // run tests once in PhantomJS browser.
            prod: {
                singleRun: true,
                browsers: ['PhantomJS']
            }
        },

        debug: {

        },
        
        sample: {
            options: {
                files: './specs/**/*.spec.js'
            }
        }
    });

    //grunt.task.registerTask('default', ['mocha']);
    grunt.task.registerTask('watch', ['connect', 'watch', 'mocha']);
    grunt.task.registerTask('mocha', ['mocha:all']);
    grunt.task.registerTask('karma', ['karma:dev']);
    grunt.task.registerTask('sample', ['sample'], function () {
        console.log('sample running...');

        var options = this.options();
        console.log(options);

        var tests = grunt.file.expand(options.files).map(function (file) {
            return file;
        });

        //mocha.tests = tests;
        grunt.option('tests', tests);
        console.log(tests);
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-karma');
};


