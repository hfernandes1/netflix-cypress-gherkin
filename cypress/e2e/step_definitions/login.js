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
