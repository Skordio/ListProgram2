<template>
    
	<div class="entry-container">
        <div   class="entry-edit-container">
            <div>
                <!-- Input for edits -->
                <textarea rows="1" v-model="editedMessage" v-show="editingPreview == true" @keydown.enter="editThisEntry()" />
            </div>
            <div>
                <!-- Note details -->
                <p  v-show="editingPreview == false"> {{ details }} </p>
            </div>
        </div>

        <div class="button-date-container">
            
            <!-- Date -->
            <p  class="date" >

                {{created.toLocaleTimeString()}} {{created.toLocaleDateString()}} 
            </p>
            <!-- Buttons -->
            <div class="two-buttons-container">
                <button class="edit button" @click="editThisEntry()">Edit</button>
                <button class="delete button" @click="deleteThisEntry()">Delete</button>
            </div>
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
        }
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

<script lang="ts">
import { ref, defineComponent } from 'vue'
import ToDoList from './ToDoList.vue';
export default defineComponent({
    props: {
        details: String,
        characters: Number,
        key: Number
    },
    setup(props, {emit}) {
        let deleteThisEntry = () => {
            this.$emit('delete')
        }
        let editThisEntry = () => {
            if(this.editingPreview) {
                this.zvalue = 10;
                this.$emit('edit', this.editedMessage)
                this.editingPreview = false;
            } else {
                this.zvalue = -20;
                this.editingPreview = true;
            }
            
            //FIXME
            const details = ref('')
            const characters = ref(0)
            const key = ref(0)
            const editedMessage = 
            return {
                deleteThisEntry,
                makeNewEntry,
                details,
                characters,
                key
            }
        },
    }
})


</script>


<style>
    .entry-container{
        display: flex;
        flex-flow: row nowrap;
        margin: 5px;
        overflow: hidden;
        align-items: center;
        
        flex: 1 0;
        
        
        background-color: #2b1155;
		border-radius: 2em;
    }

    .entry-edit-container {
        flex: 2 1;
        margin-top: -1%;
        margin-bottom: -1%;
        margin-left: 0%;
        /* background-color: rgb(166, 165, 167); */
    }

    /* applied to both text and input */
    .entry-edit-container > div {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        margin-left: 1%;
        
        /* background-color: rgb(13, 10, 15); */
    }

    .entry-edit-container > div > p {
        flex: 1 1;
        word-wrap: break-word;
        font-size: 140%;
        text-align: left;
        
        /* background-color: rgb(87, 0, 173); */
    }

    .entry-edit-container > div > textarea {
        flex: 1 2;

        justify-self: stretch;
        font-size: 140%;
        text-align: left;
        margin: 1%;
        
        margin-left: 1px;
        
        
        /* background-color: rgb(87, 0, 173); */
    }

    .button-date-container {
        display: flex;
        align-self: flex-start;
        margin-right: 1em;
        /* background-color: rgb(86, 177, 63); */
        max-width: 20em;
    }
    .button{
        flex: 0 0;
        align-self: center;
        margin: 1%;
        /* background-color: rgb(152, 177, 63); */
    }

    .date{
        flex: 1 1;
        /* background-color: rgb(111, 114, 102); */
        margin-top: 1%;
        margin-bottom: 1%;
        margin-right: 2%;
        min-width: 6em;
        text-align: right;

    }
    .two-buttons-container {
        display: flex;
    }

    @media (max-width: 1000px) {
        .entry-edit-container > div > p {
            word-wrap: break-word;
            font-size: 100%;
        }
        .entry-edit-container > div > textarea {
            font-size: 100%;
        }
        
        .button-date-container {
            display: flex;
            flex-flow: column;
            align-content: center;
            align-self: flex-start;
            flex: 0 0;
            margin-right: 1em;
        }
        .date{
            flex: 0 0;
            font-size: smaller;
            min-width: 12em;
            text-align: center;

        }
        .delete{
            padding-right: 30%;
        }
        .button{
            flex: 1 1;
            min-width: 4em;
            height: 1.5em;
            padding-top: 1%;
        }
    }


</style>