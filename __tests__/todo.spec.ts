import {mount, VueWrapper} from '@vue/test-utils'
import { expect, test } from 'vitest'// @ts-ignore
import ToDoList from '../src/components/ToDoList.vue'// @ts-ignore
import ToDoEntry from '../src/components/Entry.vue'// @ts-ignore
import ToDoEntriesList from '../src/components/ToDoEntriesList.vue'// @ts-ignore
import ToDoEntryBox from '../src/components/ToDoEntryBox.vue';// @ts-ignore
import LooseToDoEntry from '../src/components/types'// @ts-ignore
import App from '../src/App.vue' 
import { VueElement } from 'vue'

// test('test test', () => {
//     expect(Math.sqrt(4)).toBe(2)
// });

//helper function
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



describe('general ui interaction tests', async () => {

    test('testing select all', async () => {
        var testStartVals = await passIn3Entries();
        const wrapper = testStartVals[0]
        var entryArray = testStartVals[1]
        
        //@ts-ignore
        await wrapper.get('[data-test="select-all-button"]').trigger('click')

        expect(entryArray[0].props('highlighted')).toBe(true)
        expect(entryArray[1].props('highlighted')).toBe(true)
        expect(entryArray[2].props('highlighted')).toBe(true)
    });

    test('testing deselect all', async () => {
        var testStartVals = await passIn3Entries();
        const wrapper = testStartVals[0]
        var entryArray = testStartVals[1]
        
        //@ts-ignore
        await wrapper.get('[data-test="select-all-button"]').trigger('click')

        //@ts-ignore
        await wrapper.get('[data-test="deselect-all-button"]').trigger('click')

        expect(entryArray[0].props('highlighted')).toBe(false)
        expect(entryArray[1].props('highlighted')).toBe(false)
        expect(entryArray[2].props('highlighted')).toBe(false)
    });

    test('testing delete selected', async () => {
        var testStartVals = await passIn3Entries();
        const wrapper = testStartVals[0]
        var entryArray = testStartVals[1]
        
        //@ts-ignore
        await wrapper.get('[data-test="select-all-button"]').trigger('click')
        //@ts-ignore
        await wrapper.get('[data-test="delete-selected-button"]').trigger('click')

        //@ts-ignore
        expect((await wrapper.findAllComponents('[data-test="individual-entry"]')).length).toBe(0)
    });

    test('testing done selected', async () => {
        var testStartVals = await passIn3Entries();
        const wrapper = testStartVals[0]
        var entryArray = testStartVals[1]
        
        //@ts-ignore
        await wrapper.get('[data-test="select-all-button"]').trigger('click')
        //@ts-ignore
        await wrapper.get('[data-test="done-selected-button"]').trigger('click')

        expect(entryArray[0].props('done')).toBe(true)
        expect(entryArray[1].props('done')).toBe(true)
        expect(entryArray[2].props('done')).toBe(true)

        expect(entryArray[0].props('highlighted')).toBe(false)
        expect(entryArray[1].props('highlighted')).toBe(false)
        expect(entryArray[2].props('highlighted')).toBe(false)
    });

    test('testing not done selected', async () => {
        var testStartVals = await passIn3Entries();
        const wrapper = testStartVals[0]
        var entryArray = testStartVals[1]
        
        //PS HEY DAN please let me know if this is good, I feel like this test is not specific enough to what it is testing
        //but I don't know how to change it, I would've liked to pass in entries that are pre-selected through props
        //but the way the program is written I can't do that, because ToDoList automatically sets things like highlighted
        //When it takes in entries

        //@ts-ignore
        await wrapper.get('[data-test="select-all-button"]').trigger('click')
        //@ts-ignore
        await wrapper.get('[data-test="done-selected-button"]').trigger('click')
        //@ts-ignore
        await wrapper.get('[data-test="select-all-button"]').trigger('click')
        //@ts-ignore
        await wrapper.get('[data-test="not-done-selected-button"]').trigger('click')

        expect(entryArray[0].props('done')).toBe(false)
        expect(entryArray[1].props('done')).toBe(false)
        expect(entryArray[2].props('done')).toBe(false)

        expect(entryArray[0].props('highlighted')).toBe(false)
        expect(entryArray[1].props('highlighted')).toBe(false)
        expect(entryArray[2].props('highlighted')).toBe(false)
    });
});

describe('entry interaction tests', async () => {
    test('testing edit entry', async () => {
        var testStartVals = await passIn3Entries();
        const wrapper = testStartVals[0];
        var entryArray = testStartVals[1];

        //@ts-ignore
        await entryArray[0].get('[class="edit button"]').trigger('click');
        await entryArray[0].get('textarea').setValue('something different')
        await entryArray[0].get('textarea').trigger("keydown.enter")

        //@ts-ignore
        expect(wrapper.html()).toContain('something different');
    })

    
    test('testing edit entry with edit button submit', async () => {
        var testStartVals = await passIn3Entries();
        const wrapper = testStartVals[0];
        var entryArray = testStartVals[1];

        //@ts-ignore
        await entryArray[0].get('[class="edit button"]').trigger('click');
        await entryArray[0].get('textarea').setValue('something different')
        await entryArray[0].get('[class="edit button"]').trigger('click');

        //@ts-ignore
        expect(wrapper.html()).toContain('something different');
    })

    test('testing delete entry', async () => {
        var testStartVals = await passIn3Entries();
        const wrapper = testStartVals[0];
        var entryArray = testStartVals[1];

        //@ts-ignore
        await wrapper.get('[class="delete button"]').trigger('click');

        //@ts-ignore
        expect(wrapper.findAllComponents('[data-test="individual-entry"]').length).toBe(2);
        //@ts-ignore
        expect(wrapper.getComponent(ToDoEntriesList).emitted()).toHaveProperty('timeEdit');
    })

    test('testing done entry', async () => {
        var testStartVals = await passIn3Entries();
        const wrapper = testStartVals[0];
        var entryArray = testStartVals[1];

        //@ts-ignore
        await wrapper.get('[class="done button"]').trigger('click');

        expect(entryArray[0].props('done')).toBe(true);
        //@ts-ignore
        expect(wrapper.getComponent(ToDoEntriesList).emitted()).toHaveProperty('timeEdit');
    })

    test('testing done entry then undoing the same entry', async () => {
        var testStartVals = await passIn3Entries();
        const wrapper = testStartVals[0];
        var entryArray = testStartVals[1];

        //@ts-ignore
        await wrapper.get('[class="done button"]').trigger('click');
        //@ts-ignore
        await wrapper.get('[class="done button"]').trigger('click');

        expect(entryArray[0].props('done')).toBe(false);
        //@ts-ignore
        expect(wrapper.getComponent(ToDoEntriesList).emitted()).toHaveProperty('timeEdit');
    })

    test('testing total time update with only one entry', async () => {
        var testStartVals = await passIn3Entries();
        const wrapper = testStartVals[0];
        var entryArray = testStartVals[1];

        await entryArray[0].get('[class="est-time"]').setValue('1');
        await entryArray[0].get('[class="est-time"]').trigger('keyup');

        //@ts-ignore
        expect(wrapper.getComponent(ToDoEntriesList).emitted()).toHaveProperty('timeEdit');
    })
    
    test('testing total time update with three different entries', async () => {
        var testStartVals = await passIn3Entries();
        const wrapper = testStartVals[0];
        var entryArray = testStartVals[1];

        await entryArray[0].get('[class="est-time"]').setValue('1');
        await entryArray[0].get('[class="est-time"]').trigger('keyup');
        await entryArray[1].get('[class="est-time"]').setValue('2');
        await entryArray[1].get('[class="est-time"]').trigger('keyup');
        await entryArray[2].get('[class="est-time"]').setValue('5');
        await entryArray[2].get('[class="est-time"]').trigger('keyup');
        await entryArray[1].get('[class="est-time"]').setValue('');
        await entryArray[1].get('[class="est-time"]').trigger('keyup');

        //@ts-ignore
        expect(wrapper.getComponent(ToDoEntriesList).emitted()).toHaveProperty('timeEdit');
        //@ts-ignore
        expect(wrapper.get('[data-test="total-time"]').text()).toContain('6');
    })

    test('testing done entry in tandem with total time update', async () => {
        var testStartVals = await passIn3Entries();
        const wrapper = testStartVals[0];
        var entryArray = testStartVals[1];

        await entryArray[0].get('[class="est-time"]').setValue('1');
        await entryArray[0].get('[class="est-time"]').trigger('keyup');
        await entryArray[1].get('[class="est-time"]').setValue('2');
        await entryArray[1].get('[class="est-time"]').trigger('keyup');
        await entryArray[2].get('[class="est-time"]').setValue('5');
        await entryArray[2].get('[class="est-time"]').trigger('keyup');
        //@ts-ignore
        await wrapper.get('[class="done button"]').trigger('click');


        //@ts-ignore
        expect(wrapper.getComponent(ToDoEntriesList).emitted()).toHaveProperty('timeEdit');
        //@ts-ignore
        expect(wrapper.get('[data-test="total-time"]').text()).toContain('7');
    })

    test('passes in 3 entries and highlights them one by one', async () => {
        var testStartVals = await passIn3Entries();
        const wrapper = testStartVals[0]
        var entryArray = testStartVals[1]
        
        await entryArray[0].get('[data-test="entry-click-div"]').trigger('mousedown');
        await entryArray[0].get('[data-test="entry-click-div"]').trigger('mouseup');
        await entryArray[1].get('[data-test="entry-click-div"]').trigger('mousedown');
        await entryArray[1].get('[data-test="entry-click-div"]').trigger('mouseup');
        await entryArray[2].get('[data-test="entry-click-div"]').trigger('mousedown');
        await entryArray[2].get('[data-test="entry-click-div"]').trigger('mouseup');

        expect(entryArray[0].props('highlighted')).toBe(true)
        expect(entryArray[1].props('highlighted')).toBe(true)
        expect(entryArray[2].props('highlighted')).toBe(true)
    });

    // this test sadgely won't work :(
    // test('passes in 3 entries and highlights them one by one', async () => {
    //     var testStartVals = await passIn3Entries();
    //     const wrapper = testStartVals[0]
    //     var entryArray = testStartVals[1]
        
    //     await entryArray[0].get('[data-test="entry-click-div"]').trigger('mouseenter');
    //     //@ts-ignore
    //     wrapper.get('div').trigger('mousedown');
    //     await entryArray[0].get('[data-test="entry-click-div"]').trigger('mousedown');
    //     await entryArray[0].get('[data-test="entry-click-div"]').trigger('mouseleave');
    //     await entryArray[1].get('[data-test="entry-click-div"]').trigger('mouseenter');
    //     await entryArray[1].get('[data-test="entry-click-div"]').trigger('mouseleave');
    //     await entryArray[2].get('[data-test="entry-click-div"]').trigger('mouseenter');
    //     await entryArray[2].get('[data-test="entry-click-div"]').trigger('mouseup');
    //     //@ts-ignore
    //     wrapper.trigger('mouseup');

    //     expect(entryArray[0].props('highlighted')).toBe(true) 
    //     expect(entryArray[1].props('highlighted')).toBe(true)
    //     expect(entryArray[2].props('highlighted')).toBe(true)
    // });
})