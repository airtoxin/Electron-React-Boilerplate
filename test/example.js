var assert = require('assert');
var webdriverio = require('webdriverio');

var options = {
    host: "localhost", // Use localhost as chrome driver server
    port: 9515,        // "9515" is the port opened by chrome driver.
    desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {binary: 'build/v0.30.2/darwin-x64/Electron.app/Contents/MacOS/Electron'} // Path to your Electron binary.
    }
};

var client = {};
describe('example test', function() {
  this.timeout(10000);

  before(function(done) {
    client = webdriverio.remote(options);
    client.init(done);
  });

  // NOTE: http://webdriver.io/api.html
  it('has the title "test"', function(done) {
    client.getTitle(function(err, title) {
      assert(title === 'test');
    }).call(done);
  });

  after(function(done) {
    client.end(done);
  });
});
