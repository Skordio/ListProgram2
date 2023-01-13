
<template>
    <!-- List, -->
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
        setup(props) {
            const newList = ref([
                {   details: "Improve new todo list app", 
                    created: new Date(), id:  1},
                {   details: "Make Coffee", 
                    created: new Date(2012), id: 2},
                {   details: "This list is passed in with props",
                    created: new Date()}])
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


