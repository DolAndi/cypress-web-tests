const locators = {
    COMMON: {
        seeText: text => `//*[contains(text(),"${text}")]`,
        seeClass: text => `//*[contains(@class(),"${text}")]`,
        seePlaceholder: text => `//*[contains(@placeholder(),"${text}")]`
    },
    LOGIN: {
        inputEmail: '#user-name',
        inputPassword: '#password',
        loginBt: '#login-button',
        loginValidation: '#page_wrapper',
        errorValidation: '.error-message-container',
    }
}

export default locators;
