<template>
  <div>
    <input v-model="newDetails" placeholder="new note" class="list-text-box" @keydown.enter="makeNewEntry(newDetails)"/>
    <ToDoNewButton @click="makeNewEntry(newDetails)" class="list-entry-button"/>

    <div style="position: relative; left: 1.4em; top: 4em; text-align: left;">
      <li v-for="(entry, index) in todoEntries" style="position: relative;" >
        <ToDoEntry 
          :details="entry.details"
          :created="new Date()"
          :key="entry.id"
          :characters="entry.details.length"
          @edit="(message) => editEntry(index, message)"
          @delete="deleteEntry(index)"
          this.
        />
        <!-- <div style="height: 8em;"></div> -->
      </li>
    </div>  
  </div>
</template>

<script lang="ts">
import ToDoEntry from "./TodoListComponents/Entry.vue"
import ToDoNewButton from "./TodoListComponents/NewEntryButton.vue"
import {defineComponent } from 'vue'

export default defineComponent({
  methods: {
    makeNewEntry(message: string) {
      this.todoEntries.push({details: message, id: this.newEntryId++})
    },
    deleteEntry(index: number) {
      this.todoEntries.splice(index, 1)
    },
    editEntry(index: number, message: string) {
      this.todoEntries[index].details = message;
    }
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
      newEntryId: 2,
      currentEntryCharacters: 0 ///helps to pad the messages so they dont overlap
    }
  }
})

</script>

<style scoped>
.list-text-box {
  position: fixed;
  height: 1em;
  top:1.9em;
  left:8em;
  width:40em;
  padding: 0.2em;
  font-size: 1.5em;
}

.list-entry-button {
  height: 2.4em;
  font-size: 1em;
  position: fixed;
  top:2.85em;
  left:74em;
  width:8em;
}
</style>