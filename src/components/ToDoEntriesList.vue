<template>
	<div>
		<ToDoEntry v-for="(entry, index) in list"
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
			list: Array<LooseToDoEntry>,
		},
		emits: ['timeEdit'],
		components: {
			ToDoEntry
		},
		setup(props, {emit}) {
			const dehighlighting = ref(true)

			let deleteEntry = (index: number) => {
				if(props.list)
					props.list.splice(index, 1)
			}
			let editEntry = (index: number, message: string) => {
				if(props.list)
					props.list[index].details = message;
			}
			let highlightEntries = (index: number) => {
				if(props.list && mouseDown) {
					if(props.list[index].highlighted && dehighlighting.value)
						props.list[index].highlighted = false;
					else if(!props.list[index].highlighted && !dehighlighting.value)
						props.list[index].highlighted = true;
				}
			}
			let highlightEntry = (index: number) => {
				if(props.list)
					if(props.list[index].highlighted) {
						props.list[index].highlighted = false;
						dehighlighting.value = true;
					}
					else {
						props.list[index].highlighted = true;
						dehighlighting.value = false;
					}
			}
			let doneEntry = (index: number) => {
				if(props.list)
					if(props.list[index].done) {
						props.list[index].done = false;
					}
					else {
						props.list[index].done = true;
					}
					emit('timeEdit')
			}
			let timeChange = (index: number, time: string) => {
				if(props.list) {
					if(!(time == '')) {
						props.list[index].estTime = parseInt(time)
					} else {
						props.list[index].estTime = 0
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
				mouseDown
			}
		},
		
	})
</script>
