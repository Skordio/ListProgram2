
<template>
    <!-- Top Bar, fixed to top of screen -->
    <!-- WIP, will get rid of styling -->
    <div style="display: flex; top: 1em;left: 1em;right: 1em;position: fixed;align-items: center;">
        <div class="header-bar-container">
            <ToDoEntryBox
            @makeNew="(message: string) => {}"/>
        </div>
    </div>
    <!-- List, -->
    <!--  note to self: edit these position values in order to move the list entries around altogether -->
    <div class="entry-list-box">
        <ToDoList ref="list"/>
    </div>
</template>

<script lang="ts">
    import ToDoList from './components/ToDoList.vue'
    import ToDoEntryBox from './components/ToDoEntryBox.vue';
    import { ref, defineComponent } from 'vue'
    export default defineComponent({
        setup(props) {
            
            const list = ref(null)
            let makeNewEntry = (message: string) => {
            }
            return {
                list,
                makeNewEntry
            }
        }
    })
    
</script>

<style >
.header-bar-container {
    display: flex;
    flex-flow: row nowrap;
    flex: 1 1 60em;
    overflow:hidden;
    align-items: center;
    justify-content: center;
    
    
    border-radius: 1.5em;

    background-color: #2b1155;
}

/* .header-bar-container > ToDoEntryBox {
    display: flex;
    flex-flow: row nowrap;
} */

.entry-list-box {
    /* background-color: #929194; */
    display: flex;
    flex-flow: column;
    flex: 1 1;

    position: absolute;
    top: 8em;
    left: 2em;
    right: 2em;
}
</style>
