<!-- 
	This file is as of right now unused, but I want to put the entry box into it so that I can format it easier
	When I started writing this I wasn't looking at components like their own HTML elements, but I realize that
	makes it really simple to format correctly so I want to go back and redo a good amount of it in other files like this,
	also then App.vue will not be very large in case we want to add more things

 -->

<template>
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
    <ToDoNewButton @click="makeNewEntry(newDetails)" 
        style=" height: 2.4em;
                font-size: 1em;
                width:8em;"/>
	<!-- Add Entry Button -->
</template>

<script lang=ts>
import {defineComponent } from 'vue'
import ToDoList from './ToDoList.vue';
export default defineComponent({
	methods: {
		makeNewEntry(message: string) {
			ToDoList.makeNewEntry(message);
		}
	},
	data () {
		return {
      		newDetails: ''
		}
	}
})
</script>

<style>

.input-box {
	flex: 1 8 40em;
	min-height: 3em;
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

	/* the container for just the two logos, so they appear side by side */
	.logobox > div {
		display: flex;
		justify-content: space-evenly;
		flex: 1 1;
	}

	/* images style */
	.logobox > div > a > img {
		flex: 1 1;
	}

	/* text element style */
	.logobox > p {
		flex: 1 1;
		margin-bottom: 3px;
		font-size: small;
	}
</style>