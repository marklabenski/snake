module.exports = function(grunt) {
  grunt.registerTask('dev', ['eslint', 'babel', 'sass', 'wiredep']);
};
