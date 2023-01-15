<template>
	<div>
		<ToDoEntry v-for="(entry, index) in todoEntries"
			:details="entry.details"
			:created="new Date()"
			:key="entry.id"
			:highlighted="entry.highlighted"
			@edit="(message: string) => editEntry(index, message)"
			@delete="deleteEntry(index)"
			@highlight="highlightEntries(index)"
			@highlight-me="highlightEntry(index)"
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
			let deleteEntry = (index: number) => {
				if(todoEntries.value)
					todoEntries.value.splice(index, 1)
			}
			let editEntry = (index: number, message: string) => {
				if(todoEntries.value)
					todoEntries.value[index].details = message;
			}
			let highlightEntries = (index: number) => {
				if(todoEntries.value && mouseDown)
					if(todoEntries.value[index].highlighted)
						todoEntries.value[index].highlighted = false;
					else
						todoEntries.value[index].highlighted = true;
			}
			let highlightEntry = (index: number) => {
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

			var mouseDown = 0;
			document.body.onmousedown = function() { 
				if(mouseDown == 0)
					++mouseDown;
				else
					mouseDown = 1;
			}
			document.body.onmouseup = function() {
				if(mouseDown == 1)
					--mouseDown;
				else
					mouseDown = 0;
			}
			document.body.onmouseenter = function() {
					mouseDown = 0;
			}

			return {
				deleteEntry,
				editEntry,
				highlightEntries,
				highlightEntry,
				todoEntries,
				newDetails,
				newEntryId,
				currentEntryCharacters,
				mouseDown
			}
		},
		
	})
	const newEntryId = ref(0)
</script>
