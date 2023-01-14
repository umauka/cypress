class SignInPage{
    getLogo(){
        return cy.get('a.logo')
    }
    getWhatsNewTab(){
        return cy.get('#ui-id-3 > span')
    }
    getWomenTab(){
        return cy.get('#ui-id-4 > span:nth-child(2)')
    }
    getMenTab(){
        return cy.get('#ui-id-5 > span:nth-child(2)')
    }
    getGearTab(){
        return cy.get('#ui-id-6 > span:nth-child(2)')
    }
    getTrainingTab(){
        return cy.get('#ui-id-7 > span:nth-child(2)')
    }
    getSaleTab(){
        return cy.get('#ui-id-8 > span')
    }
    getSearch(){
        return cy.get('#search')
    }
    getCart(){
        return cy.get('a.action.showcart')
    }
    getCreateAccount(){
        return cy.get('ul.header.links > li:nth-child(3) > a')
    }
    getSignIn(){
        return cy.get('.panel > .header > .authorization-link > a')
    }
    getNewsLetter(){
        return cy.get('input#newsletter')
    }
    getAboutUs(){
        return cy.get('body > div.page-wrapper > footer > div > div.links > div > ul > li:nth-child(2) > a')
    }
    getCustomerService(){
        return cy.get('body > div.page-wrapper > footer > div > div.links > div > ul > li:nth-child(3) > a')
    }
    getOrdersReturns(){
        return cy.get('body > div.page-wrapper > footer > div > ul > li:nth-child(4) > a')
    }
    getAdvancedSearch(){
        return cy.get('body > div.page-wrapper > footer > div > ul > li:nth-child(3) > a')
    }
    getPrivacyPolicy(){
        return cy.get('body > div.page-wrapper > footer > div > ul > li:nth-child(2) > a')
    }
    getSearchTerms(){
        return cy.get('body > div.page-wrapper > footer > div > ul > li:nth-child(1) > a')
    }
    getSignInHeader(){
        return cy.get('.base')
    }
    getEmail(){
        return cy.get('#email')
    }
    getPassword(){
        return cy.get('#pass')
    }
    getSignInBtn(){
        return cy.get('#send2 > span')
    }
}
export default SignInPage;