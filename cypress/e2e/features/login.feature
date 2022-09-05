Feature: Login page
In order to login to the page
As a super user type
i want to access the netflix page
so that I enter the home page
 
Feature Login page will work depending on the user credentials

Background:
    Given A user enter on Netflix page

@successfull-login
Scenario: Sucess Login
    When An user click on sign in button
    And enters the username
    And fill the password
    And clicks on the login button
    Then the url will contains the inventory subdirectory

@invalid-login
Scenario: Invalid parameters
    When An user click on sign in button
    And enters the username
    And fill the password
    And clicks on the login button
    Then the url will contains the inventory subdirectory

# Scenario Outline: User enters invalid credentials
#     When A user enters whith an invalid credentials - incorrect "<username>" or "<password>"
#     And Click on the action button
#     Then system will return an "alert"

#   Examples:
#     | username                            | password |
#     | hfernandes1@lenovo.com              | Home1234 |
#     | palmeirasmelhordaamerica@lenovo.com | Casa1234 |