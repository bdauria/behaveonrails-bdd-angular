Feature: Sign in
  As a user
  In order to use my registered account
  I want to sign in

  Background:
    Given I am on the sign in page

  Scenario: using valid credentials
    When I sign in user valid credentials
    Then I should be logged in

  Scenario: usign invalid credentials
    When I sign in using invalid credentials
    Then I should see the error "Invalid credentials"
