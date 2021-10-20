import {t} from 'testcafe'
import loginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'

fixture("Login feature test")
    .page("https://todoist.com")
    .beforeEach(async t => {
        await t.click(HomePage.homePageHeaderLogin)
    }) 



test(`As a user I should be able to log in using valid creds`, async t => {
    await t
        .typeText(loginPage.usernameInput, 'hectorrtz16@gmail.com')
        .typeText(loginPage.passwordInput, 'jaia1684')
        .click(loginPage.loginButton)
        //assert 
})

