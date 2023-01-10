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
  <div>
    <a style = "left:3em;" href="https://vitejs.dev" target="_blank">
      <img style = "left:1em;" src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img style = "left:6em;" src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <ToDoList class ="listbox"/>
</template>

<style scoped>
.logo {
  height: 3em;
  position: absolute;
  top:1em;
  padding: 20px;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.listbox {
  position: absolute;
  top:2em;
  left:12em;
  width:50em;
}
</style>
