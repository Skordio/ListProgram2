
<template>
	<div class="header-bar-box">
		<!-- container element for logos and text, this is just one
			item in the main header container -->
		<div class="logobox">
			<!-- little "Powered by" text element-->
			<p> Powered By: </p>

			<!-- logos -->
			<div>
				<a  href="https://vitejs.dev" style="order:1"
					target="_blank">

					<img src="/vite.svg" class="logo" alt="Vite logo" />
				</a>
				<a  href="https://vuejs.org/" style="order:0"
					target="_blank">
					
					<img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
				</a>
			</div>
		</div>

		<!-- Input -->
		<input  v-model="newDetails" placeholder="new note" 
			@keydown.enter="makeNewEntry(newDetails)" 
			class="input-box" />

		<!-- The add button -->
		<Button @click="makeNewEntry(newDetails)" 
			class="add-button">
			Add Note
		</Button>
	</div>
</template>

<script lang="ts">
	import {ref, defineComponent } from 'vue'
	export default defineComponent({
		setup(props, {emit}) {
			const newDetails = ref('')
			let makeNewEntry = (message:string) => {
				emit('makeNew', message)
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
		flex: 1 1 60em;
		align-items:center;
		justify-content: center;

		background-color: #2b1155;
		border-radius: 1.5em;
	}

	.input-box {
		flex: 1 6 50em;
		min-height: 1.5em;
		max-height: 2em;
		font-size: 1.5em;
	}
	.add-button {
		flex: 1 0;
		margin-left: 1em;
		margin-right: 1em;
		max-width: 10em;
	}

	/* container for whole 'powered by' section */
	.logobox {
		display: flex;
		justify-content:center;
		flex-flow: column nowrap;

		flex: 0 1 7em;
		order: 0;
		margin-top: -10px;

		
		/* background-color: black; */
	}
</style>