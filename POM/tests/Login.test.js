import {t} from 'testcafe'
import loginPage from '../pages/LoginPage'

fixture("Login feature test")
    .page("https://todoist.com/users/showlogin")
    /* .beforeEach(async => {
        await t.click('a[href="/users/showlogin"]')
    }) */



test(`As a user I should be able to log in using valid creds`, async t => {
    await t
        .typeText(loginPage.usernameInput, 'hectorrtz16@gmail.com')
        .typeText(loginPage.passwordInput, 'jaia1684')
        .click(loginPage.loginButton)
        //assert 
})

