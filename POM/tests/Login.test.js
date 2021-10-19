import {Selector, t} from 'testcafe'
import loginPage from '../pages/LoginPage'

fixture("Login feature test")
    .page("https://todoist.com/Users/login")
    .beforeEach(async t => {
        await t.click('a[href="/users/showlogin"]')
    })



test(`As a user I should be able to log in using valid creds`, async => {
    await t
        .typeText(loginPage.usernameInput, 'hectorrtz16@gmail.com')
        .typeText('#password', 'jaia1684')
        .click('#login_form' > button)
})

 