import { fixture, Selector, t} from "testcafe";

fixture("Add New task feature test")
    .page("http://myurhttps://todoist.com/app/today");

test('As a user, I should be able to add a new task to my today board', async => {
    await t
    .click('#agenda_view' > div > section > div > ul > li > button)
    .typeText('#agenda_view > div > section > div > ul > li > form > div.task_editor__editing_area > div.task_editor__input_fields > textarea', 'New task for Hector')
    .click('#agenda_view > div > section > div > ul > li.manager.indent_1 > form > div.task_editor__form_actions > div > div:nth-child(1) > button')

})