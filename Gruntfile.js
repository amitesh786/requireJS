module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            main: {
                src: ['./js/build.min.js']
            }
        },
        requirejs: {
            // packages: [
            //     { name: '% pkg.name %', location: '% pkg.version %',  main: '% pkg.email %' }
            // ],
            build: {
                options: {
                    baseUrl: ".",
                    mainConfigFile: "js/config.js",
                    include: [
                        'randomMethods',
                        'jqueryFile'
                    ],
                    out: "js/build.min.js",
                    wrap: true,
                    optimize: 'uglify'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    // grunt.loadNpmTasks('grunt-requirejs');

    // Load the plugin that provides the "uglify" task
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask("start", ["clean:main", "requirejs:build"]); 
};
