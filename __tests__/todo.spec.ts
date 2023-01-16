import {mount} from '@vue/test-utils'
//@ts-ignore
import ToDoList from '../src/components/ToDoList.vue'
//@ts-ignore
import ToDoEntry from '../src/components/Entry.vue'
//@ts-ignore
import ToDoEntriesList from '../src/components/ToDoEntriesList.vue'
//@ts-ignore
import ToDoEntryBox from '../src/components/ToDoEntryBox.vue';

test('makes New Entry', async () => {
    
    const wrapper = mount(ToDoList)

    var newMessage = 'hello'

    await wrapper.get('#main-input-field').setValue(newMessage)
    await wrapper.get('#add-entry-button').trigger('click')

    expect(wrapper.findAll('#entry-text')).toBe(newMessage)
});