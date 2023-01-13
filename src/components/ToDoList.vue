<template>
    <!-- Top Bar, fixed to top of screen -->
    <!-- WIP, will get rid of styling -->
    <div class="header-bar-container">
        <ToDoEntryBox :entriesList="list"/>
    </div>
    
    <!-- List, -->
    <div class="entry-list-container">
        <ToDoEntriesList :entriesList="list"/>
    </div>
</template>

<script lang="ts">
    import ToDoEntriesList from './ToDoEntriesList.vue'
    import ToDoEntryBox from './ToDoEntryBox.vue';
    import ToDoEntryInterface from './types/'
    import { onMounted, ref, reactive, defineComponent } from 'vue'
    export default defineComponent({
        props: {
            list: Array<ToDoEntryInterface>
        },
        components: {
            ToDoEntriesList,
            ToDoEntryBox
        },
        setup(props) {
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

    top: 12%;
    left: 1em;
    right: 1em;
    position: absolute;
}
</style>