<template>
    
	<div class="entry-container">
        <div   class="entry-edit-container">
            <div>
                <!-- Input for edits -->
                <textarea v-model="editedMessage" v-if="editingPreview == true" @keydown.enter="editThisEntry()" oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'/>
            </div>
            <div>
                <!-- Note details -->
                <p  v-if="editingPreview == false"> {{ details }} </p>
            </div>
        </div>

        <div class="button-date-container">
            <!-- Buttons -->
            <button class="edit button" @click="editThisEntry()">Edit</button>
            <button class="delete button" @click="deleteThisEntry()">Delete</button>

            <!-- Date -->
            <p  style=" font-size: 1em; 
                        text-align: right;" >

                {{created.toLocaleTimeString()}} {{created.toLocaleDateString()}} 
            </p>
        </div>
    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ToDoList from './ToDoList.vue';
export default defineComponent({
    methods: {
        deleteThisEntry() {
            this.$emit('delete')
        },
        editThisEntry() {
            if(this.editingPreview) {
                this.zvalue = 10;
                this.$emit('edit', this.editedMessage)
                this.editingPreview = false;
            } else {
                this.zvalue = -20;
                this.editingPreview = true;
            }
        },
        // This padding method isn't great but works a little
        calculatePadding() {
            return (this.characters!)/(63);
        }
    },
    props: {
        details: String,
        characters: Number,
        key: Number
    },
    data() {
        return {
            editingPreview: false,
            editedMessage: this.details,
            created: new Date(),
            zvalue: 10 //the z value for the note details
        }
    }
})


</script>

<style>

    .entry-container{
        display: flex;
        flex: 1 1;
        flex-flow: row nowrap;
        justify-content: space-between;
        margin: 0.5em;
        background-color: rgb(143, 86, 160);
        overflow: hidden;
        
		border-radius: 2em;
    }

    .entry-edit-container {
        flex: 10 10 70em;
        /* background-color: rgb(166, 165, 167); */
        justify-content: flex-start;
        min-width: 0;
    }

    .entry-edit-container > div {
        flex: 10 10 70em;
        margin-left: 1em;
        order: 2;
    }

    .entry-edit-container > div > p {
        text-align: left;
        word-wrap: break-word;
        max-width: 70em;
    }

    .entry-edit-container > div > textarea {
        flex: 0 1 70em ;
        font-size: 1em;
        text-align: left;
        height: max;
        
    }

    .button-date-container {
        display: flex;
        justify-content: flex-end;
        flex: 1 1;
        margin-right: 2em;

    }
    .button{
        flex: 1 1;
        max-width: 5em;
        min-width: 5em;
        margin: 0.5em;
        order: 1
    }

    .date{
        flex: 1 1;
        order: 1
    }


</style>