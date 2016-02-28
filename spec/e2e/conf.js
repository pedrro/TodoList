exports.config = {
  directConnect: true,
  framework: 'jasmine',
  specs: ['test/**_spec.js'],
  capabilities: {
    'browserName': 'chrome'
  }
};

if (process.env.SNAP_CI) {
  exports.config.chromeDriver = '/usr/local/bin/chromedriver';
}
