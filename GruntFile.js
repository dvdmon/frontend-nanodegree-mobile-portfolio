module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.initConfig({
        jshint: {
            all: ['views/js/main.js'],
            options: {
            	"curly": true,
            	"eqnull": true,
            	"eqeqeq": true,
            	"globals": {
            		"jQuery": true
            	}
            }
        },
    watch: {
        files: ['views/js/main.js'],
        tasks: ['jshint']
        }
    });

    // Default task(s).
  grunt.registerTask('default', ['jshint']);
};