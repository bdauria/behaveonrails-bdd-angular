Feature:
  As a user
  In order to become a simple visitor
  I want to sign out

  Scenario: signing out
    Given I am signed in
    And I am on the home page
    When I sign out
    Then I should see the available options to authenticate
