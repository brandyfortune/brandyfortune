module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-postcss');

    grunt.initConfig({
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 2 versions']
                    })
                ]
            },
            dist: {
                src: '*.css'
            }
        }
    });

    grunt.registerTask('default', ['postcss:dist']);
};