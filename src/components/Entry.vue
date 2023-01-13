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
                <!--    this line here would not work without the exclamation points, 
                        is that okay or have I done something wrong? -->
                {{created!.toLocaleTimeString()}} {{created!.toLocaleDateString()}} 
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
import { ref, defineComponent } from 'vue'
import ToDoList from './ToDoList.vue';
export default defineComponent({
    emits: ['edit','delete'],
    props: {
        details: String,
        created: Date,
        key: Number
    },
    setup(props, {emit}) {
        const editingPreview = ref(false);
        const editedMessage = ref(props.details)
        const created = ref(props.created);
        if(!created) {
            const created = ref(new Date)
        }
        const key = ref(0)
        const zvalue = ref(10)

        let deleteThisEntry = () => {
            emit('delete')
        }
        let editThisEntry = () => {
            if(editingPreview.value == true) {
                zvalue.value = 10;
                emit('edit', editedMessage)
                editingPreview.value = false;
            } else {
                zvalue.value = -20;
                editingPreview.value = true;
            }
        }
        return {
            deleteThisEntry,
            editThisEntry,
            editingPreview,
            editedMessage,
            created,
            key,
            zvalue
        }
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
        
        
        background-color: #825fb9;
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