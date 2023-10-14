import SignInPage from "../pageObjects/SignInPage"
const signInPage = new SignInPage()
const data=require('../fixtures/testData.json')

const homeLink = data.landingPage.homeLink
const cartLink = data.landingPage.cartLink
const signUpLink = data.landingPage.signUpLink
const signInLink = data.landingPage.signInLink
const aboutUsLink = data.landingPage.aboutUsLink
const customerService = data.landingPage.customerServiceLink
const returnLink = data.landingPage.ordersReturnsLink
const searchTermsLink = data.landingPage.searchTermsLink
const privacyPolicyLink = data.landingPage.privacyPolicyLink
const advancedSearchLink = data.landingPage.advancedSearchLink
const email = data.customerCredentials.email
const password = data.customerCredentials.password
const signInErrMessage = data.signIn.err

describe('Sign In Module', () => {
  beforeEach('', ()=>{
    cy.openBaseUrl()
  })
  afterEach('', ()=>{
  })
  it('To verify that user can view landing page', () => {
    cy.url().should('include', 'magento')
    signInPage.getLogo().should('be.visible').and('have.attr', 'href', homeLink)
    signInPage.getWhatsNewTab().should('be.visible').and('contain.text', "What's New")
    signInPage.getWomenTab().should('be.visible').and('contain.text', "Women")
    signInPage.getMenTab().should('be.visible').and('contain.text', "Men")
    signInPage.getGearTab().should('be.visible').and('contain.text', "Gear")
    signInPage.getTrainingTab().should('be.visible').and('contain.text', "Training")
    signInPage.getSaleTab().should('be.visible').and('contain.text', "Sale")
    signInPage.getSearch().should('be.visible').and('have.attr', 'placeholder', 'Search entire store here...')
    signInPage.getCart().should('be.visible').and('have.attr', 'href', cartLink)
    signInPage.getCreateAccount().should('be.visible').and('have.attr', 'href', signUpLink).and('contain.text', 'Create an Account')
    signInPage.getSignIn().should('be.visible').and('have.attr', 'href', signInLink).and('contain.text', 'Sign In')
    signInPage.getNewsLetter().scrollIntoView().should('be.visible').and('have.attr', 'placeholder', 'Enter your email address')
    signInPage.getAboutUs().should('be.visible').and('contain.text', "About us").and('have.attr', 'href', aboutUsLink)
    signInPage.getCustomerService().should('be.visible').and('contain.text', "Customer Service").and('have.attr', 'href', customerService)
    signInPage.getOrdersReturns().should('be.visible').and('contain.text', "Orders and Returns").and('have.attr', 'href', returnLink)
    signInPage.getSearchTerms().should('be.visible').and('contain.text', "Search Terms").and('have.attr', 'href', searchTermsLink)
    signInPage.getPrivacyPolicy().should('be.visible').and('contain.text', "Privacy and Cookie Policy").and('have.attr', 'href', privacyPolicyLink)
    signInPage.getAdvancedSearch().should('be.visible').and('contain.text', "Advanced Search").and('have.attr', 'href', advancedSearchLink)
  })
  it.only('To verify that user cannot Log in with a disabled account', () => {
    signInPage.getSignIn().scrollIntoView().click()
    cy.url().should('equal', signInLink)
    signInPage.getSignInHeader().should('be.visible').and('contain.text', 'Customer Login')
    signInPage.getEmail().type(email)
    signInPage.getPassword().type(password)
    signInPage.getSignInBtn().click()
    signInPage.getErrMessage().should('be.visible').and('contain.text', signInErrMessage)
  })
})
//Remember to find a way to bypass captcha