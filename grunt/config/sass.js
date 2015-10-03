module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: 'app/styles/scss',
      src: ['*.scss'],
      dest: 'app/styles/',
      ext: '.css'
    }]
  }
};
