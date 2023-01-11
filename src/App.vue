
<template>
    <!-- Top Bar -->
    <div class="header-bar">
        <ToDoEntryBox/>
    </div>

    <!-- List, -->
    <!--  note to self: edit these position values in order to move the list entries around altogether -->
    <ToDoList style="position: absolute; top: 7.5em; left: 3em; width: 50em;" />
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
.logo {
    height: 3em;
    z-index: 100;
    position: fixed;
    top: 1em;
    padding: 20px;
    will-change: filter;
}

.header-bar {
    position:fixed;
    z-index: 100;
    top:0.7em;
    width: 81em;
    left: 1.5em;
    height: 5.2em
}
</style>
