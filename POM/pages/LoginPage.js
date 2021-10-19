import {Selector} from 'testcafe'

class LoginPage{
    constructor(){
        this.usernameInput = Selector('#email')
        this.passwordInput = Selector('#password')
        this.loginButton = Selector('#login_form > button')

    }
}
export default new LoginPage
