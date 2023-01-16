
<template>
	<div class="header-bar-box">
		<!-- container element for logos and text, this is just one
			item in the main header container -->
		<div class="logobox noselect">
			<!-- little "Powered by" text element-->
			<p> Powered By: </p>

			<!-- logos -->
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src="/vite.svg" class="logo" alt="Vite logo" />
				</a>
				<a href="https://vuejs.org/" target="_blank">
					<img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
				</a>
			</div>
		</div>

		<!-- Input -->
		<input  v-model="newDetails" placeholder="new note" 
			@keydown.enter="makeNewEntry(newDetails, new Date())" 
			class="input-box" />

		<!-- The add button -->
		<Button @click="makeNewEntry(newDetails, new Date())" class="add-button">
			Add Note
		</Button>
	</div>
</template>

<script lang="ts">
	import {ref, defineComponent } from 'vue'
	import {LooseToDoEntry} from './types'
	export default defineComponent({
		props: {
			entriesList: Array<LooseToDoEntry>
		},
		setup(props, {emit}) {
			const newDetails = ref('')
			
			let makeNewEntry = (message: string, created: Date) => {
				if(props.entriesList)
					if(props.entriesList.length == 0)
						props.entriesList.push({details: message, created: created, id: 0, highlighted: false, done: false, estTime: 0 })
					else
						props.entriesList.push({details: message, created: created, id: props.entriesList[props.entriesList.length-1].id! + 1, highlighted: false, done: false, estTime: 0 })
			}
			return {
				makeNewEntry,
				newDetails
			}
		}
	})
</script>

<style scoped>

	/* this flexbox is for actually containing the items in the header bar */
	.header-bar-box {
		display: flex;
		flex-flow: row nowrap;
		flex: 1 1;
		align-items:center;

		background-color: rgb(59, 19, 71);
		border-radius: 1.5em;
	}

	.input-box {
		flex: 1 6 50em;
		min-height: 1.5em;
		max-height: 2em;
		font-size: 1.5em;
	}
	.add-button {
		flex: 0 0;
		margin-left: 1em;
		margin-right: 1em;
		max-width: 10em;
	}
	
    
	.noselect {
		-webkit-touch-callout: none; /* iOS Safari */
			-webkit-user-select: none; /* Safari */
			-khtml-user-select: none; /* Konqueror HTML */
			-moz-user-select: none; /* Old versions of Firefox */
				-ms-user-select: none; /* Internet Explorer/Edge */
					user-select: none; /* Non-prefixed version, currently
										supported by Chrome, Edge, Opera and Firefox */
	}

	/* container for whole 'powered by' section */
	.logobox {
		display: flex;
		justify-content:center;
		flex-flow: column nowrap;

		flex: 0 0 7em;
		order: 0;
		margin-top: -10px;

		
		/* background-color: black; */
	}
</style>