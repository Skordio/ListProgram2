
<template>
    <div class="entry-list-container">
        <ToDoList :list="newList"/>
    </div>
</template>

<script lang="ts">
    import ToDoList from './components/ToDoList.vue'
    import { ref, defineComponent } from 'vue'
    export default defineComponent({
        components: {
            ToDoList
        },
        setup() {
            const newList = ref([
                {   details: "Improve new todo list app"},
                {   details: "Make Coffee"},
                {   details: "This list is passed in with props"}])
            return {
                newList
            }
        }
    })
</script>

<style>
.todo-list-container {
    background-color: #929194;
    display: flex;
    flex-flow: column;

    top: 1em;
    left: 1em;
    right: 1em;
    position: absolute;
}
</style>


