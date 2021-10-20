import {Selector} from 'testcafe'

class HomePage{
    constructor(){
        this.homePageHeaderLogin = Selector('a[href="/users/showlogin"]')

    }
}
export default new HomePage