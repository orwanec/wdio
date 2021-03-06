exports.config = Object.assign({}, require('./wdio.conf').config, {
  hostname: 'geckodriver',
  capabilities: [
    {
      // geckodriver supports no parallel sessions:
      maxInstances: 1,
      browserName: 'firefox',
      'moz:firefoxOptions': {
        //args: ['-headless', '--window-size=1440,900']
      }
    }
  ],
  videos: {
    enabled: true
  }
})
