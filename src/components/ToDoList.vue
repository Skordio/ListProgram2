<script lang="ts">
import ToDoEntry from "./TodoListComponents/Entry.vue"
import ToDoNewButton from "./TodoListComponents/NewEntryButton.vue"
import {defineComponent } from 'vue'
export default defineComponent({
  methods: {
    makeNewEntry(details: string) {
      this.todoEntries.push(details)
    }
  },
  components: {
    ToDoEntry,
    ToDoNewButton
  },
  data() {
    return {
      todoEntries: [''],
      newDetails: '' 
    }
  }
})


</script>

<template>
  <div>
  <input v-model="newDetails" placeholder="new note" />
<!-- Will change this so key is an ID and entry is text -->
  <ToDoEntry
    v-for="entry in todoEntries"
    to-do-details="entry"
  ></ToDoEntry>
  <ToDoNewButton @click="makeNewEntry(newDetails)"/></div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>