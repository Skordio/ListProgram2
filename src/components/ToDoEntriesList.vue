<template>
	<div class="entry-list-container">
		<ToDoEntry v-for="(entry, index) in todoEntries"
			:details="entry.details"
			:created="new Date()"
			:key="entry.id"
			@edit="(message: string) => editEntry(index, message)"
			@delete="deleteEntry(index)"
		/>
	</div>
</template>

<script lang="ts">
	import ToDoEntry from "./Entry.vue"
	import ToDoList from "./ToDoList.vue"
    import ToDoEntryInterface from './'
	import {onMounted, ref, defineComponent} from 'vue'
	export default defineComponent({
		props: {
			entriesList: Array<ToDoEntryInterface>
		},
		components: {
			ToDoEntry
		},
		setup(props, {emit}) {
			let makeNewEntry = (message: string, created: Date) => {
				if(todoEntries.value)
					todoEntries.value.push({details: message, created: created, id: todoEntries.value[todoEntries.value.length-1].id + 1})
			}
			let deleteEntry = (index: number) => {
				if(todoEntries.value)
					todoEntries.value.splice(index, 1)
			}
			let editEntry = (index: number, message: string) => {
				if(todoEntries.value)
					todoEntries.value[index].details = message;
			}

			const todoEntries = ref(props.entriesList)
			const newDetails = ref('')
			const newEntryId = ref(0)
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
		},
		
	})
	const newEntryId = ref(0)
	const props = defineProps({
			entriesList: Array<ToDoEntryInterface>
		})
	onMounted(() => {
		if(props.entriesList)
			for(var i = 0; i < props.entriesList.length; i++)
			{
				props.entriesList[i].id = newEntryId.value++
				if(!props.entriesList[i].created) {
					props.entriesList[i].created = new Date();
				}
			}
	})
</script>

<style>
.entry-list-container {
    /* background-color: #929194; */
    display: flex;
    flex-flow: column;

    top: 13%;
    left: 2em;
    right: 2em;
    position: absolute;
}
</style>