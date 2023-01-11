
<template>
    <!-- Top Bar, fixed to top of screen -->
    <div class="header-bar-container">
        <ToDoEntryBox/>
    </div>

    <!-- List, -->
    <!--  note to self: edit these position values in order to move the list entries around altogether -->
    <div class="entry-list-box">
        <ToDoList  />
    </div>
</template>

<script lang="ts">
import ToDoList from './components/ToDoList.vue'
import { defineComponent } from 'vue';
import ToDoEntryBox from './components/ToDoEntryBox.vue';
export default defineComponent({
    components: {
    ToDoList,
    ToDoEntryBox
}
})
</script>

<style >
.header-bar-container {
    display: flex;
    flex-flow: row nowrap;
    flex: 1 1;
    overflow:hidden;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 1em;
    left: 1em;
    right: 1em;
    
    
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
