<template>
	<div>
		<ToDoEntry v-for="(entry, index) in todoEntries"
			:details="entry.details"
			:created="new Date()"
			:key="entry.id"
			:highlighted="entry.highlighted"
			@edit="(message: string) => editEntry(index, message)"
			@delete="deleteEntry(index)"
			@highlight="hightlightEntry(index)"
		/>
	</div>
</template>

<script lang="ts">
	import ToDoEntry from "./Entry.vue"
	import ToDoList from "./ToDoList.vue"
    import {LooseToDoEntry} from './types'
	import {onMounted, ref, defineComponent} from 'vue'
	export default defineComponent({
		props: {
			entriesList: Array<LooseToDoEntry>
		},
		components: {
			ToDoEntry
		},
		setup(props, {emit}) {
			let makeNewEntry = (message: string, created: Date) => {
				if(todoEntries.value)
					todoEntries.value.push({details: message, created: created, id: todoEntries.value[todoEntries.value.length-1].id! + 1})
			}
			let deleteEntry = (index: number) => {
				if(todoEntries.value)
					todoEntries.value.splice(index, 1)
			}
			let editEntry = (index: number, message: string) => {
				if(todoEntries.value)
					todoEntries.value[index].details = message;
			}
			let hightlightEntry = (index: number) => {
				if(todoEntries.value)
					if(todoEntries.value[index].highlighted)
						todoEntries.value[index].highlighted = false;
					else
						todoEntries.value[index].highlighted = true;
			}
			

			const todoEntries = ref(props.entriesList)
			const newDetails = ref('')
			const newEntryId = ref(0)
			const currentEntryCharacters = ref(0)

			

			return {
				makeNewEntry,
				deleteEntry,
				editEntry,
				hightlightEntry,
				todoEntries,
				newDetails,
				newEntryId,
				currentEntryCharacters
			}
		},
		
	})
	const newEntryId = ref(0)
</script>
