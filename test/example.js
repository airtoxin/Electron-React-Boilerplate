var assert = require('assert');
var webdriverio = require('webdriverio');
var Chromedriver = require('appium-chromedriver')

var options = {
    host: "localhost", // Use localhost as chrome driver server
    port: 9515,        // "9515" is the port opened by chrome driver.
    desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {binary: 'build/v0.30.2/darwin-x64/Electron.app/Contents/MacOS/Electron'} // Path to your Electron binary.
    }
};

var client = {};
var driver = {};
describe('example test', function() {
  this.timeout(10000);

  before(function(done) {
    driver = new Chromedriver();
    driver.start(options.desiredCapabilities);
    driver.on(Chromedriver.EVENT_CHANGED, function(msg) {
      switch(msg.state) {
        case Chromedriver.STATE_ONLINE:
          client = webdriverio.remote(options);
          client.init(done);
          break;
        default:
          break;
      }
    });
  });

  // NOTE: http://webdriver.io/api.html
  it('has the title "test"', function(done) {
    client.getTitle(function(err, title) {
      assert(title === 'test');
    }).call(done);
  });

  after(function(done) {
    console.log('clean up');
    client.end(function() {
      driver.stop();
      done();
    });
  });
});
