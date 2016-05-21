const Zombie = require('zombie');
const Http = require('http');

function World() {
  var server = process.env.testServer || 'http://localhost';
  var port = process.env.testPort || '4567';
  this.backendMock = require('./backend_mock.js');
  this.browser = new Zombie({site: server + ':' + port});

  this.visitPage = function(link, title, callback) {
    var self = this;
    this.browser.visit(link, function() {
      self.browser.assert.text("h2", title);
      callback();
    });
  };
};

module.exports = function() {
  this.World = World;
};
