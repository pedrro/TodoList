exports.config = {
  directConnect: true,
  framework: 'jasmine',
  specs: ['test/**_spec.js'],
  capabilities: {
    'browserName': 'chrome',
    shardTestFiles: true,
    maxInstances: 2
  }
};

if (process.env.SNAP_CI) {
  exports.config.chromeDriver = '/usr/local/bin/chromedriver';
}
