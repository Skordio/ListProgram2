<script lang="ts">
import ToDoList from './components/ToDoList.vue'
import { defineComponent } from 'vue';
export default defineComponent({
    components: {
        ToDoList
    }
})
</script>

<template>
    <!--  this <v-hover> thing was me trying to stop the button from being highlihghted when you mouse over it,
        I just wanted it there as a background for the top bar because it looks nice -->
    <v-hover disabled>
        <button
            style=" position: fixed; 
                    z-index: 50;    
                    top:0.7em; 
                    width: 81em; 
                    left: 1.5em; 
                    height: 5.2em">
        </button>
    </v-hover>

    <!-- Logo elements -->
    <div>
        <!-- little text element-->
        <h style="  z-index: 100; 
                    position: fixed; 
                    top:0.8em; 
                    left: 5em; 
                    font-size: small;"> 
                    
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
            
            <img style="left:6em;" src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
    </div>

    <!-- List, -->
    <!--  note to self: edit these position values in order to move the list entries around altogether -->
    <ToDoList style="position: absolute; top: 2.5em; left: 3em; width: 50em;" />
</template>

<style scoped>
.logo {
    height: 3em;
    z-index: 100;
    position: fixed;
    top: 1em;
    padding: 20px;
    will-change: filter;
}
</style>
