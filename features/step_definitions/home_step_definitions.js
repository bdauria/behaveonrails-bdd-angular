module.exports = function () {
  this.Given(/^I am on the home page$/, function (callback) {
    this.visitPage('/', 'Home', callback);
  });

  this.Then(/^I should see the available options to authenticate$/, function (callback) {
    this.browser.assert.link('a', 'Sign up', '/#/sign_up');
    this.browser.assert.link('a', 'Sign in', '/#/sign_in');
    callback();
  });
};
