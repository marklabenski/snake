module.exports = {
  task: {

    // Point to the files that should be updated when
    // you run `grunt wiredep`
    src: [
      'app/index.html',   // .html support...
      'app/styles/scss/main.scss'  // .scss & .sass support...
    ],

    options: {
      // See wiredep's configuration documentation for the options
      // you may pass:
      directory: 'app/vendor'
      // https://github.com/taptapship/wiredep#configuration
    }
  }
};
