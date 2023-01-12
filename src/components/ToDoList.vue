<template>
	<div class="entry-list-container">
		<ToDoEntry v-for="(entry, index) in todoEntries"
			:details="entry.details"
			:created="new Date()"
			:key="entry.id"
			:characters="entry.details.length"
			@edit="(message: string) => editEntry(index, message)"
			@delete="deleteEntry(index)"
		/>
	</div>
</template>

<script lang="ts">
import ToDoEntry from "./Entry.vue"
import {ref, defineComponent} from 'vue'
export default defineComponent({
	components: {
		ToDoEntry
	},
	setup(props) {
		let makeNewEntry = (message: string) => {
			todoEntries.value.push({details: message, id: newEntryId.value++})
		}
		let deleteEntry = (index: number) => {
			todoEntries.value.splice(index, 1)
		}
		let editEntry = (index: number, message: string) => {
			todoEntries.value[index].details = message;
		}

		const todoEntries = ref([{details: 'Make Todo List App', id: 0}, 
				{details: 'Make coffee', id: 1}])
		const newDetails = ref('')
		const newEntryId = ref(2)
		const currentEntryCharacters = ref(0)

		return {
			makeNewEntry,
			deleteEntry,
			editEntry,
			todoEntries,
			newDetails,
			newEntryId,
			currentEntryCharacters
		}
	}
})
</script>
