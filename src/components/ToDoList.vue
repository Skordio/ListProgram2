<template>
	<ToDoEntry v-for="(entry, index) in todoEntries"
		:details="entry.details"
		:created="new Date()"
		:key="entry.id"
		:characters="entry.details.length"
		@edit="(message) => editEntry(index, message)"
		@delete="deleteEntry(index)"
	/>
</template>

<script lang="ts">
import ToDoEntry from "./TodoListComponents/Entry.vue"
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
			ToDoEntry
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

<style>

</style>