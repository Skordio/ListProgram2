
<template>
	<div class="header-bar-box">
		<div class="logobox noselect">
			<p> Powered By: </p>

			<div>
				<a href="https://vitejs.dev" target="_blank">
					<!-- <img src="/vite.svg" class="logo vite" alt="Vite logo" /> -->
				</a>
				<a href="https://vuejs.org/" target="_blank">
					<!-- <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" /> -->
				</a>
			</div>
		</div>

		<input v-model="newDetails" placeholder="new note" 
			@keydown.enter="makeNewEntry(newDetails)" 
			class="input-box"
			id="main-input-field" />

		<Button @click="makeNewEntry(newDetails)" 
				class="add-button"
				id="add-entry-button">
			Add Note
		</Button>
	</div>
</template>

<script lang="ts">
	import {ref, defineComponent } from 'vue'
	import {LooseToDoEntry} from './types'
	export default defineComponent({
		props: {
			list: Array<LooseToDoEntry>
		},
		setup(props) {
			const newDetails = ref('')
			
			let makeNewEntry = (message: string) => {
				if(props.list) {
					var newEntry = {details: message, 
									created: new Date(), 
									id: 0, 
									highlighted: false, 
									done: false, 
									estTime: 0}
					if(props.list.length > 0)
						newEntry.id = props.list[props.list.length-1].id! + 1;
					props.list.push(newEntry)
				}
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
		justify-content: center;
		overflow: hidden;

		background-color: rgb(59, 19, 71);
		border-radius: 1.5em;
	}

	.logobox {
		display: flex;
		justify-content:center;
		flex-flow: column nowrap;
		flex: 0 0 7em;
		margin-top: -1em;
	}
		.logo {
			min-height: 2.5em;
			margin-top: -1em;
		}

	.input-box {
		flex: 1 6 50em;
		height: 1.5em;
		font-size: 1.5em;
	}
	.add-button {
		flex: 0 0;
		margin-left: 1em;
		margin-right: 1em;
		width: 5em;
	}

	
</style>