import loc from '../pageElements/locators';

class general {
    openApp() {
        cy.visit('/login/').as('open Canopy')
    }
}
export default new general()