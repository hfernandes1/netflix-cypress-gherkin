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
    And enters the invalid username
    And fill the invalid password
    And clicks on the login button
    Then the system will return the error message

@blank-field
Scenario Outline: blank fields
    When An user click on sign in button
    And enters the blank "<username>" or "<password>"
    And clicks on the login button
    Then display the "<alert>"

Examples:
    | username         | password  | alert                                                  |
    | Henrique Amaral  | pas       | Your password must contain between 4 and 60 characters.|
    | Hen              | password  | Please enter a valid email.                            |
    | NULL             | password  | Please enter a valid email or phone number.            |                       
    | Henrique         | NULL      | Your password must contain between 4 and 60 characters.|             

