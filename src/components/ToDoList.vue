<script lang="ts">
import ToDoEntry from "./TodoListComponents/Entry.vue"
import ToDoNewButton from "./TodoListComponents/NewEntryButton.vue"
import {defineComponent } from 'vue'
export default defineComponent({
  methods: {
    makeNewEntry(message: string, idNum: number) {
      this.todoEntries.push({details: message, id: idNum})
    },
    // deleteEntry(idNum: Number) {
    //   this.todoEntries.splice(this.todoEntries.indexOf({details: String, id: idNum}))
    // }
  },
  components: {
    ToDoEntry,
    ToDoNewButton
  },
  data() {
    return {
      todoEntries: [
        {details: 'Make Todo List App', id: 0}, 
        {details: 'Make coffee', id: 1}],
      newDetails: '',
      entryCount: 2
    }
  }
})


</script>

<template>
  <div>
    <input v-model="newDetails" placeholder="new note" class="list-text-box"/>
    <ToDoNewButton @click="makeNewEntry(newDetails, entryCount++)" class="list-entry-button"/>
    <div style="height: .5em"></div>
    <ToDoEntry
      v-for="entry in todoEntries"
      :created="new Date"
      :details="entry.details"
      :id="entry.id"
    />
  </div>
</template>

<style scoped>
.list-text-box {
  height: .5em;
  font-size: 1.5em;
  position: absolute;
  top:0.4em;
  left:0em;
  width:40em;
  padding: 0.6em;
}

.list-entry-button {
  height: 3em;
  font-size: 1em;
  position: absolute;
  top:0.5em;
  left:63em;
  width:8em;
  padding: 0.6em;
}
</style>