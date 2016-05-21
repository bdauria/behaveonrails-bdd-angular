Feature: Visit home page
  As a user
  In order to step into the application
  I want to visit the home page

  Scenario: without being signed in
    Given I am on the home page
    Then I should see the available options to authenticate
