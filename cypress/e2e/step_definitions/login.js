// import elements from'../../support/pages/Login/elements'
import elements from'../../pages/Login/elements'

import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  
  
  
  
  Given("A user enter on Netflix page", () => {
    cy.visit("/");
  });

  When("An user click on sign in button", () => {
    cy.get(elements.LOGIN.btn_signin).click();
  });
  
  And("enters the username", () => {
    cy.get(elements.LOGIN.email).type('TYPE A VALID EMAIL')
  });

  And("fill the password", () => {
    cy.get(elements.LOGIN.password).type('TYPE A PASSWORD')
  });

  And("clicks on the login button", () => {
    cy.get(elements.LOGIN.btn_action).click();
  }); 

  Then("the url will contains the inventory subdirectory", () => {
    cy.url().should("contains", "/browse");
  });

  //---------------------------------------- CASE 2 ------------------------ //

  And("enters the invalid username", () => {
    cy.get(elements.LOGIN.email).type('invalidemail@gmail.com')
  });

  And("fill the invalid password", () => {
    cy.get(elements.LOGIN.password).type('invalidpassword')
  });

  Then ("the system will return the error message", () => {
    cy.get('.ui-message-contents')
    .should('be.visible')
    .should('have.text', "Sorry, we can't find an account with this email address. Please try again or create a new account." )
  });

  //---------------------------------------- CASE 3 ------------------------ //

  And ("enters the blank {string} or {string}",(username,password2) => {

    if (username == "NULL"){
      username = null;
  }
  else {
      cy.get(elements.LOGIN.email).type(username)
  }
  
  if (password2 == "NULL"){
      password2 = null;
  }
  else {
      cy.get(elements.LOGIN.password).type(password2)
  }
  
  });


   Then("display the {string}", (alert) => {
	  cy.get(elements.LOGIN.btn_action).click()
    cy.get('.inputError', { timeout: 10000 })
    .should('be.visible')
    .should('have.text', alert )
  });