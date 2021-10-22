import {Selector} from 'testcafe'

class UserBoard{
    constructor(){
        this.userSettings = Selector('#top_bar_inner > div.top_right_button_group > button.reactist_menubutton.top_bar_btn.settings_btn')
        this.addTask = Selector('#agenda_view > div > section:nth-child(2) > div > ul > li > button')
        this.taskname = Selector('#agenda_view > div > section:nth-child(2) > div > ul > li > form > div.task_editor__editing_area > div.task_editor__input_fields > div > div > div > div.DraftEditor-editorContainer > div > div > div > div')

    }
}
export default new UserBoard