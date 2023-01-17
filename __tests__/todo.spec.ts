import {mount} from '@vue/test-utils'
//@ts-ignore
import ToDoList from '../src/components/ToDoList.vue'
//@ts-ignore
import ToDoEntry from '../src/components/Entry.vue'
//@ts-ignore
import ToDoEntriesList from '../src/components/ToDoEntriesList.vue'
//@ts-ignore
import ToDoEntryBox from '../src/components/ToDoEntryBox.vue';

test('makes New Entry1', async () => {
    
    const wrapper = mount(ToDoList, {props: { ["new todo entry"]:Array }});

    var newMessage = "hello";

    await wrapper.get('[data-test="main-input-field"]').setValue(newMessage);
    await wrapper.get('[data-test="add-entry-button"]').trigger("click");

            
    expect(wrapper.get('[data-test="entry-text"]')).toMatch(newMessage);
});

test('makes New Entry1', async () => {
    
    const wrapper = mount(ToDoList, {props: { ["new todo entry"]:Array }});

    var newMessage = "hello";

    await wrapper.get('[data-test="main-input-field"]').setValue(newMessage);
    await wrapper.get('[data-test="add-entry-button"]').trigger("click");

            
    expect(wrapper.get('[data-test="entry-text"]')).toMatch(newMessage);
});
// test('makes a New Entry2', () => {
    
//     const wrapper = mount(ToDoList, {props: { ['']:Array }})

//     var newMessage = 'hello'

//     const entryTextInput = wrapper.get('input[data-test="main-input-field"]');
//     entryTextInput.setValue(newMessage);
//     const entryAddButton = wrapper.get('button[data-test="add-entry-button"]');
//     entryAddButton.trigger('click');

//     expect(wrapper.getComponent<typeof ToDoEntry>('ToDoEntry[data-test="individual-entry"]').vm.details).toBe(newMessage)
// });

// describe('ToDoList.vue', () => {
//     it('makes New Entry3', async () => {
    
//             const wrapper = mount(ToDoList, {props: { ['']:Array }});
        
//             var newMessage = 'hello';
        
//             const entryTextInput = wrapper.get('input[data-test="main-input-field"]');
//             await entryTextInput.setValue(newMessage);
//             const entryAddButton = wrapper.get('button[data-test="add-entry-button"]');
//             await entryAddButton.trigger('click');
        
//             const entryText = await wrapper.find('p[data-test="entry-text"]');
            
//             expect(entryText.text).toMatch(newMessage);
//     })
// })