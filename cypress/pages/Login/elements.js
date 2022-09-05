//elementos da página de chain script
const elements = {

    LOGIN: {
    
    btn_signin: '.authLinks',
    email: '.nfEmailPhoneControls > .input_id > .placeLabel',
    password: '#id_password',
    btn_action: '.btn',
    message: '#message',
    btn_closemessage: '#messageModalClose',
    ok_resetpassword:"//footer/div[3]/div[2]/a[contains(text(),'OK')]",
    captcha:'#captcha-value'
    }

}
export default elements;

// AÇÕES

// import el from './elements'
// Cypress.Commands.add('Login', (email, senha) => {

//     cy.get(el.LOGIN.email).type(email)
//     cy.get(el.LOGIN.password).type(senha)
//     cy.wait(10000)   
//     // cy.title().should('be.equal','Resolute')

//     // cy.Xhr('/authorization/authenticate', el.LOGIN.btn_action, 'loadhomepage')

// })
