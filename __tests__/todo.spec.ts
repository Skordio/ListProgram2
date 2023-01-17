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
    
    const wrapper = mount(ToDoList, {props: { ['']:Array }});

    var newMessage = 'hello';

    await wrapper.find('input[test="main-input-field"]').setValue(newMessage);
    await wrapper.find('button[test="add-entry-button"]').trigger('click');

    expect(wrapper.find('p[test="entry-text"]')).toBe(newMessage);
});

// test('makes a New Entry', async () => {
    
//     const wrapper = mount(ToDoList, {props: { ['']:Array }})

//     var newMessage = 'hello'

//     await wrapper.find('[test="main-input-field"]').setValue(newMessage)
//     await wrapper.find('[test="add-entry-button"]').trigger('click')

//     expect(wrapper.getComponent<typeof ToDoEntry>('ToDoEntry[test="individual-entry"]').vm.details).toBe(newMessage)
// });

describe('ToDoList.vue', () => {
    it('makes New Entry', async () => {
    
            const wrapper = mount(ToDoList, {props: { ['']:Array }});
        
            var newMessage = 'hello';
        
            await wrapper.find('input[test="main-input-field"]').setValue(newMessage);
            await wrapper.find('button[test="add-entry-button"]').trigger('click');
        
            expect(wrapper.find('p[test="entry-text"]')).toBe(newMessage);
    })
})