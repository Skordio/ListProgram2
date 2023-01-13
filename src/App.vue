
<template>
    <!-- Top Bar, fixed to top of screen -->
    <!-- WIP, will get rid of styling -->
    <div class="header-bar-container">
        <ToDoEntryBox @makeNew="(message:string) => entrylist.makeNewEntry(message)"/>
    </div>
    
    <!-- List, -->
    <div class="entry-list-container">
        <ToDoList ref="entrylist"/>
    </div>
</template>

<script lang="ts">
    import ToDoList from './components/ToDoList.vue'
    import ToDoEntryBox from './components/ToDoEntryBox.vue';
    import { ref, reactive, defineComponent } from 'vue'
    export default defineComponent({
        components: {
            ToDoList,
            ToDoEntryBox
        },
        setup(props) {
            const entrylist = reactive(ToDoList)
            return {
                // makeNewEntry,
                entrylist
            }
        }
    })
</script>

<style>
/* this flexbox is for positioning at top of screen */
.header-bar-container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    overflow: hidden;

    top: 1.5em;
    left: 1.5em;
    right: 1.5em;
    position: fixed;
    z-index: 1;
}

.entry-list-container {
    /* background-color: #929194; */
    display: flex;
    flex-flow: column;

    top: 13%;
    left: 2em;
    right: 2em;
    position: absolute;
}
</style>
