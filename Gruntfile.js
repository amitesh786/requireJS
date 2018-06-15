module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            main: {
                src: ['./js/build.min.js']
            }
        },
        requirejs: {
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
    
    // Clean + Build Package
    grunt.registerTask("start", ["clean:main", "requirejs:build"]); 
};
