import cy from '../support/pages/general'
import login from '../support/pages/login'

describe('Login', () => {
    beforeEach(() => {
        cy.openApp()
    });
    it('01 - Login succesfully', () => {
        cy.successLogin('user')
    });
    it('02 - Login unsuccessfully', () => {
        cy.errorLogin()
    });
});