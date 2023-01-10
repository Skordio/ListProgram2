<template>
    <button>Add Todo Entry</button>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    export default defineComponent({
        emits: ['editTodo']
    })

</script>

