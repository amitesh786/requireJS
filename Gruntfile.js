module.exports = function (grunt) {

    // load Npm Task
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.initConfig(
        {
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
        }
    );
    
    // Clean + Build Package
    grunt.registerTask("start", ["clean:main", "requirejs:build"]);
};
