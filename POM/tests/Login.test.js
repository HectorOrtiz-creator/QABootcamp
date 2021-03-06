import {t} from 'testcafe'
import loginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import UserBoard from '../pages/UserBoard'

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
        .click(UserBoard.userSettings) 
        //.expect(userSettings('.title').innerText).contains('Hector')// assert will be programed here...
        
})

