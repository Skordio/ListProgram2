<template>
  <div>
    <!--  Also I am not sure how to format the inside of these <input xxx /> 
          items so lmk if what I did here was good or how I could do better -->

    <!--  Note entry box that stays at the top of the screen -->
    <input  v-model="newDetails" placeholder="new note" 
        @keydown.enter="makeNewEntry(newDetails)" 
        style=" position: fixed;
                height: 1em;
                top:1.9em;
                left:8em;
                width:40em;
                padding: 0.2em;
                z-index: 100;
                font-size: 1.5em;" />
    <!-- The add button -->
    <ToDoNewButton @click="makeNewEntry(newDetails)" 
        style=" height: 2.4em;
                font-size: 1em;
                position: fixed;
                top:2.85em;
                left:74em;
                z-index: 100;
                width:8em;"/>
    
    <!--  The v-for list of entries, I was thinking about making this a Multiple 
          select form so you could easily delete multiple, but it might look bad -->
    <div style="position: relative; left: 1.4em; top: 4em; text-align: left;">
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