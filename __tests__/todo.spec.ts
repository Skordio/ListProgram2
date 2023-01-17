import {mount} from '@vue/test-utils'
import { expect, test } from 'vitest'// @ts-ignore
import ToDoList from '../src/components/ToDoList.vue'// @ts-ignore
import ToDoEntry from '../src/components/Entry.vue'// @ts-ignore
import ToDoEntriesList from '../src/components/ToDoEntriesList.vue'// @ts-ignore
import ToDoEntryBox from '../src/components/ToDoEntryBox.vue';// @ts-ignore
import App from '../src/App.vue'

// test('test test', () => {
//     expect(Math.sqrt(4)).toBe(2)
// });

describe('entry creation', () => {
    test('makes one entry using the add entry button and tests if it looks right', async () => {
        var newMessage = "hello";

        const wrapper = mount(App);

        await wrapper.get('input[data-test="main-input-field"]').setValue(newMessage);
        await wrapper.get('button[data-test="add-entry-button"]').trigger("click");
        expect(wrapper.get('[data-test="entry-text"]').text()).toMatch(newMessage);
    });

    test('makes one entry using the enter key and tests if it looks right', async () => {
        var newMessage = "hello";

        const wrapper = mount(App);

        const inputField = await wrapper.get('input[data-test="main-input-field"]');
        await inputField.setValue(newMessage);
        await inputField.trigger("keydown.enter");
        expect(wrapper.get('p[data-test="entry-text"]').text()).toMatch(newMessage);
    });

    test('passes in an array of 3 Loose Entries with props and checks if it renders 3 entries', async () => {
        var newMessage0 = "hello"
        var newMessage1 = "why not"
        var newMessage2 = "oh shoot"
        var newEntryArray:Array<LooseToDoEntry> = [{details:newMessage0},{details:newMessage1},{details:newMessage2}];

        const wrapper = mount(App, {
            props: {
                list: newEntryArray
            }
        });

        var entryArray = await wrapper.findAll('[data-test="individual-entry"]');

        expect(entryArray.length).toBe(3);
        expect(entryArray[0].get('p[data-test="entry-text"]').text()).toBe(newMessage0);
        expect(entryArray[1].get('p[data-test="entry-text"]').text()).toBe(newMessage1);
        expect(entryArray[2].get('p[data-test="entry-text"]').text()).toBe(newMessage2);
    });
});



describe('ui-content-interaction tests', async () => {
    //passes in 3 entries into a new mounted app, then returns the wrapper and list of entry wrappers
    async function passIn3Entries() {
        var newMessage0 = "hello"
        var newMessage1 = "why not"
        var newMessage2 = "oh shoot"
        var newEntryArray:Array<LooseToDoEntry> = [{details:newMessage0},{details:newMessage1},{details:newMessage2}];
        const wrapper = mount(App, {
            props: {
                list: newEntryArray
            }
        });
        var entryArray = await wrapper.findAllComponents('[data-test="individual-entry"]');
        return [wrapper, entryArray]
    }

    test('passes in 3 entries and highlights them by clicking the select all button', async () => {
        var testStartVals = await passIn3Entries();
        const wrapper = testStartVals[0]
        var entryArray = testStartVals[1]
        
        await wrapper.get('[data-test="select-all-button"]').trigger('click')

        expect(entryArray[0].props('highlighted')).toBe(true)
    });

    test('passes in 3 entries and highlights them one by one', async () => {
        var testStartVals = await passIn3Entries();
        const wrapper = testStartVals[0]
        var entryArray = testStartVals[1]
        
        await entryArray[0].get('[data-test="entry-click-div"]').trigger('mousedown');
        await entryArray[1].get('[data-test="entry-click-div"]').trigger('mousedown');
        await entryArray[2].get('[data-test="entry-click-div"]').trigger('mousedown');

        expect(entryArray[0].props('highlighted')).toBe(true)
        expect(entryArray[1].props('highlighted')).toBe(true)
        expect(entryArray[2].props('highlighted')).toBe(true)
    });
});
// test('makes New Entry2', async () => {
    
//     const wrapper = mount(ToDoList, {props: {  }});

//     var newMessage = "hello";

//     await wrapper.getComponent(ToDoEntryBox).vm.makeNewEntry(newMessage);

            
//     expect(await wrapper.get('[data-test="entry-text"]')).toMatch(newMessage);
// });
// test('makes a New Entry3', () => {
    
//     const wrapper = mount(ToDoList, {props: { ['']:Array }})

//     var newMessage = 'hello'

//     const entryTextInput = wrapper.get('input[data-test="main-input-field"]');
//     entryTextInput.setValue(newMessage);
//     const entryAddButton = wrapper.get('button[data-test="add-entry-button"]');
//     entryAddButton.trigger('click');

//     expect(wrapper.getComponent<typeof ToDoEntry>('ToDoEntry[data-test="individual-entry"]').vm.details).toBe(newMessage)
// });

// // describe('ToDoList.vue', () => {
// //     it('makes New Entry3', async () => {
    
// //             const wrapper = mount(ToDoList, {props: {  }});
        
// //             var newMessage = 'hello';
        
// //             const entryTextInput = wrapper.get('input[data-test="main-input-field"]');
// //             await entryTextInput.setValue(newMessage);
// //             const entryAddButton = wrapper.get('button[data-test="add-entry-button"]');
// //             await entryAddButton.trigger('click');
        
// //             const entryText = await wrapper.find('p[data-test="entry-text"]');
            
// //             expect(entryText.text).toMatch(newMessage);
// //     })
// // })