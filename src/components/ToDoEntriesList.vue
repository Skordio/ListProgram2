<template>
	<div>
		<ToDoEntry v-for="(entry, index) in entriesList"
			:details="entry.details"
			:created="entry.created"
			:key="entry.id"
			:highlighted="entry.highlighted"
			:done="entry.done"
			:est-time="entry.estTime"
			@edit="(message: string) => editEntry(index, message)"
			@delete="deleteEntry(index)"
			@highlight="highlightEntries(index)"
			@highlight-me="highlightEntry(index)"
			@done="doneEntry(index)"
			@time-edit="(time) => {timeChange(index, time)}"
		/>
	</div>
</template>

<script lang="ts">
	import ToDoEntry from "./Entry.vue"
    import {LooseToDoEntry} from './types'
	import {ref, defineComponent} from 'vue'
	export default defineComponent({
		props: {
			entriesList: Array<LooseToDoEntry>,
		},
		emits: ['timeEdit'],
		components: {
			ToDoEntry
		},
		setup(props, {emit}) {
			const newEntryId = ref(0)
			const currentEntryCharacters = ref(0)
			const dehighlighting = ref(true)

			let deleteEntry = (index: number) => {
				if(props.entriesList)
					props.entriesList.splice(index, 1)
			}
			let editEntry = (index: number, message: string) => {
				if(props.entriesList)
					props.entriesList[index].details = message;
			}
			let highlightEntries = (index: number) => {
				if(props.entriesList && mouseDown) {
					if(props.entriesList[index].highlighted && dehighlighting.value)
						props.entriesList[index].highlighted = false;
					else if(!props.entriesList[index].highlighted && !dehighlighting.value)
						props.entriesList[index].highlighted = true;
				}
			}
			let highlightEntry = (index: number) => {
				if(props.entriesList)
					if(props.entriesList[index].highlighted) {
						props.entriesList[index].highlighted = false;
						dehighlighting.value = true;
					}
					else {
						props.entriesList[index].highlighted = true;
						dehighlighting.value = false;
					}
			}
			let doneEntry = (index: number) => {
				if(props.entriesList)
					if(props.entriesList[index].done) {
						props.entriesList[index].done = false;
					}
					else {
						props.entriesList[index].done = true;
					}
					emit('timeEdit')
			}
			let timeChange = (index: number, time: string) => {
				if(props.entriesList) {
					if(!(time == '')) {
						props.entriesList[index].estTime = parseInt(time)
					} else {
						props.entriesList[index].estTime = 0
					}
					emit('timeEdit')
				}
			}

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
				doneEntry,
				timeChange,
				newEntryId,
				currentEntryCharacters,
				mouseDown
			}
		},
		
	})
</script>
