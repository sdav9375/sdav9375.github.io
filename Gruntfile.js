module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-postcss');

  grunt.initConfig({
    postcss: {
      options: {
        map: true,
        processors: [require('autoprefixer')]
      },
      dist: {
        src: 'css/*.css'
      }
    }
  });

  grunt.registerTask('default', ['postcss:dist']);
};
