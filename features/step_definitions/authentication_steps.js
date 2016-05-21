module.exports = function () {
  var submitValidLogin = function (callback) {
    this.currentEmail = 'test@test.com';
    var password = 'password';
    this.backendMock.mockSuccessfulSignIn(this.currentEmail, password);
    this.browser
      .fill('email', this.currentEmail)
      .fill('password', password)
      .pressButton('Sign in', callback);
  };

  this.Given(/^I am on the sign up page$/, function (callback) {
    this.visitPage('/#/sign_up', 'Sign up', callback);
  });

  this.Given(/^I am on the sign in page$/, function (callback) {
    this.visitPage('/#/sign_in', 'Sign in', callback);
  });

  this.Given(/^I am signed in$/, function (callback) {
    var self = this;
    this.browser.visit('/#/sign_in').then(function() {
      submitValidLogin.bind(self)(callback);
    });
  });

  this.When(/^I sign out$/, function (callback) {
    this.backendMock.mockSignOut(this.currentEmail);
    this.browser.clickLink('Sign out', callback);
  });

  this.When(/^I sign up using valid credentials$/, function (callback) {
    this.currentEmail = 'test@example.com';
    var password = 'password';
    this.backendMock.mockSuccessfulSignUp(this.currentEmail, password);
    this.backendMock.mockSuccessfulSignIn(this.currentEmail, password);
    this.browser
      .fill('email', this.currentEmail)
      .fill('password', password)
      .fill('password_confirmation', password)
      .pressButton('Sign up', callback);
  });

  this.When(/^I sign up using inconsistent password and confirmation$/, function (callback) {
    this.currentEmail = 'test@test.com';
    var password = 'password';
    var confirmation = 'passwor';
    this.backendMock.mockConfirmationDoesNotMatchPassword(this.currentEmail, password, confirmation);
    this.browser
      .fill('email', this.currentEmail)
      .fill('password', password)
      .fill('password_confirmation', confirmation)
      .pressButton('Sign up', callback);
  });

  this.When(/^I sign in user valid credentials$/, submitValidLogin);

  this.When(/^I sign in using invalid credentials$/, function (callback) {
    this.currentEmail = 'invalid@email.com';
    var password = 'password'
    this.backendMock.mockInvalidSignIn(this.currentEmail, password);
    this.browser
      .fill('email', this.currentEmail)
      .fill('password', password)
      .pressButton('Sign in', callback);
  });

  this.Then(/^I should be logged in$/, function (callback) {
    this.browser.assert.text('h3', 'Welcome ' + this.currentEmail + '!');
    this.browser.assert.link('a', 'Sign out', '/#');
    callback();
  });

  this.Then(/^I should see the error "([^"]*)"$/, function (error, callback) {
    this.browser.assert.text('h3', error);
    callback();
  });
};
