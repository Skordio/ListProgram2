<!-- 
	This file is as of right now unused, but I want to put the entry box into it so that I can format it easier
	When I started writing this I wasn't looking at components like their own HTML elements, but I realize that
	makes it really simple to format correctly so I want to go back and redo a good amount of it in other files like this,
	also then App.vue will not be very large in case we want to add more things

 -->

<template>
	<!-- I am just using this button as a nice background for my text entry box -->
    <button class="header-bar" style="z-index: 50;"> </button>

	<!-- little "Powered by" text element-->
	<h style="	position:inherit;
				top:.1em; 
				left: 5em; 
				font-size: large;
				z-index: 100;"> 
                    
		Powered By:
    </h>

	<!-- I left these logos in because they look nice, but stopped them from lighting up -->
	<a  style="left:3em;" 
		href="https://vitejs.dev" 
		target="_blank">

		<img style="left:1em;" src="/vite.svg" class="logo" alt="Vite logo" />
	</a>
	<a  href="https://vuejs.org/" 
		target="_blank">
		
		<img style="left:6em;" src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
	</a>

	<!-- Input -->
    <input  v-model="newDetails" placeholder="new note" 
        @keydown.enter="makeNewEntry(newDetails)" 
        style="	height: 1em;
                top:1.2em;
                left:8em;
                width:40em;
                padding: 0.2em;
                font-size: 1.5em;" />
    <!-- The add button -->
    <ToDoNewButton @click="makeNewEntry(newDetails)" 
        style=" height: 2.4em;
                font-size: 1em;
                top:2.1em;
                right:5em;
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