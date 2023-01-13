
<template>
    <!-- List, -->
    <div class="entry-list-container">
        <ToDoList :list="newList"/>
    </div>
</template>

<script lang="ts">
    import ToDoList from './components/ToDoList.vue'
    import ToDoEntryInterface from './components'
    import { ref, defineComponent } from 'vue'
    export default defineComponent({
        components: {
            ToDoList
        },
        setup(props) {
            const newList = ref([{details: "Make new todo list app", created: new Date(), id:  1},{details: "Make Coffee", created: new Date(2012), id: 2}])
            return {
                newList
            }
        }
    })
</script>

<style>
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


