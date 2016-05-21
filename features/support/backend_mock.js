var exports = module.exports = {};
var Nock = require('nock');
var server = Nock(process.env.backendServer || 'http://localhost:3000')
  .defaultReplyHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'    
  });
 
exports.mockSuccessfulSignUp = function(email, password) {
  server.post('/auth', {
    email: email,
    password: password,
    password_confirmation: password
  })
  .reply(200);
};

exports.mockSuccessfulSignIn = function(email, password) {
  server.post('/auth/sign_in', {
    email: email,
    password: password
  })
  .reply(200, {
    data:{
      email:email
    }
  });
};

exports.mockConfirmationDoesNotMatchPassword = function(email, password, confirmation) {
  server.post('/auth', {
    email: email,
    password: password,
    password_confirmation: confirmation
  })
  .reply(422, {
    errors: ['Confirmation does not match password'],
  });
};

exports.mockInvalidSignIn = function(email, password) {
  server.post('/auth/sign_in', {
    email: email,
    password: password
  })
  .reply(422, {
    errors: ['Invalid credentials'],
  });
};

exports.mockSignOut = function(email) {
  server.post('/auth/sign_out', {
    email: email
  })
  .reply(200)
};
