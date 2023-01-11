<template>
    <!--  Also I am not sure how to format the inside of these <input xxx /> 
          items so lmk if what I did here was good or how I could do better -->

    
    <!--  The v-for list of entries, I was thinking about making this a Multiple 
          select form so you could easily delete multiple, but it might look bad -->
    <div class="list-box">
        <li v-for="(entry, index) in todoEntries" style="position: relative;" >
            <ToDoEntry 
                :details="entry.details"
                :created="new Date()"
                :key="entry.id"
                :characters="entry.details.length"
                @edit="(message) => editEntry(index, message)"
                @delete="deleteEntry(index)"
            />
        </li>
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