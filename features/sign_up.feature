Feature: Sign up
  As a user
  In order to have access to the application
  I want to sign up an account

  Background: 
    Given I am on the sign up page

  Scenario: using valid credentials
    When I sign up using valid credentials
    Then I should be logged in

  Scenario: using invalid credentials
    When I sign up using inconsistent password and confirmation
    Then I should see the error "Confirmation does not match password"
