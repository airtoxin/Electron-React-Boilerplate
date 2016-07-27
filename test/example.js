'use babel';

import assert from 'assert';
import webdriverio from 'webdriverio';
import Chromedriver from 'appium-chromedriver';

const options = {
  host: 'localhost', // Use localhost as chrome driver server
  port: 9515,        // "9515" is the port opened by chrome driver.
  desiredCapabilities: {
    browserName: 'chrome',
    chromeOptions: {
      binary: 'build/v0.30.2/darwin-x64/Electron.app/Contents/MacOS/Electron',
    },
  },
};

let client = {};
let driver = {};

describe('example test', function(done) {
  this.timeout(10000);

  before(function(done) {
    driver = new Chromedriver();
    driver.start(options.desiredCapabilities);
    driver.on(Chromedriver.EVENT_CHANGED, function(msg) {
      switch (msg.state) {
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
    client.end(() => {
      driver.stop();
      done();
    });
  });
});
