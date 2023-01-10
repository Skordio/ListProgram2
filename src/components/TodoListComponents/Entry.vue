<script lang="ts">
import { defineComponent } from 'vue'
import ToDoDeleteButton from './DeleteButton.vue';
import ToDoEditButton from './EditButton.vue';
export default defineComponent({
    components: {
        ToDoDeleteButton,
        ToDoEditButton
    },
    props: {
        id: Number,
        ToDoDetails: String,
        created: Date
    },
})


</script>

<template>
    <div>
        <p>{{ ToDoDetails }}</p>
        <ToDoEditButton @edit-todo="" />
    </div>
</template>