@Mobile
Feature: Mobile View: Saily Checkout pages displays an error when accessed without a prior selection

  Scenario: Mobile View: Destinations checkout page shows error when accessed without selection
    Given the user navigates to the Saily website
    When the user accepts the cookies
    And the user clicks on SideBar menu button
    And the user clicks on View Destinations button in sidebar menu
    And the user waits until UTM is in the URL
    And the user clicks on "Africa" country
    And the user waits until UTM is in the URL
    And the user clicks Checkout button
    Then the user should see an error message on the Checkout page

  # This scenario is expected to always fail due to missing selection to generate screenshot and report for logs.
  Scenario: Destinations checkout page shows error when accessed without selection 
    Given the user navigates to the Saily website
    When the user accepts the cookies
    And the user clicks on SideBar menu button
    And the user clicks on View Destinations button in sidebar menu
    And the user waits until UTM is in the URL
    And the user clicks on "Africa" country
    And the user waits until UTM is in the URL
    And the user clicks Checkout button
    Then the scenario should fail because the selection is not exists