module.exports = {
    options: {
      sourceMap: true
    },
    dist: {
      files: {
        'app/scripts/bootstrap.js': 'app/scripts/src/**/*.js'
      }
    }
};
