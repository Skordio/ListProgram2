
<template>
    <div>
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