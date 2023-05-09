import loc from '../pageElements/locators';

class general {
    openApp() {
        cy.visit('/').as('open site')
    }
    successLogin(user){
        cy.fixture('login').then(function (login) {
  
        const userMail = user + 'Email'
        const userPass = user + 'Password'
            
        this.loginMail = login[userMail]
        this.loginPass = login[userPass]
            
        cy.get(loc.LOGIN.inputEmail).type(this.loginMail).as('write email')
        cy.get(loc.LOGIN.inputPassword).type(this.loginPass).as('write password')
        cy.get(loc.LOGIN.loginBt).click().as('click login button')
        cy.get(loc.LOGIN.loginValidation).should('exist', 'be.visible').as('login validation')
    })
    }
    errorLogin(randomEmail, randomPassword){
        cy.get(loc.LOGIN.inputEmail).type(randomEmail).as('write email')
        cy.get(loc.LOGIN.inputPassword).type(randomPassword).as('write password')
        cy.get(loc.LOGIN.loginBt).click().as('click login button')
        cy.get(loc.LOGIN.errorValidation).should('exist', 'be.visible').as('error login validation')
        cy.xpath(loc.COMMON.seeText('Username and password do not match any user in this service')).should('exist', 'be.visible').as('error login validation')
    }
    otherErrorLogin(data){
        const userMail = 'test@test.com'
        if (data === 'passwordRequired') {
            cy.get(loc.LOGIN.inputEmail).type(userMail).as('write email')
            cy.get(loc.LOGIN.loginBt).click().as('click login button')
            cy.get(loc.LOGIN.errorValidation).should('exist', 'be.visible').as('error login validation')
            cy.xpath(loc.COMMON.seeText('Password is required')).should('exist', 'be.visible').as('error login validation')
        }
        if (data === 'usernameRequired') {
            cy.get(loc.LOGIN.inputPassword).type(userMail).as('write password')
            cy.get(loc.LOGIN.loginBt).click().as('click login button')
            cy.get(loc.LOGIN.errorValidation).should('exist', 'be.visible').as('error login validation')
            cy.xpath(loc.COMMON.seeText('Username is required')).should('exist', 'be.visible').as('error login validation')
        }
    }
}
export default new general()