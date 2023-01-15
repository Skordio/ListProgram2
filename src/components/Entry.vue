<template>
    
	<div class="entry-container" v-bind:class="{ 'entry-container-highlighted': highlighted }" >
        <div   class="details-container">
            <div>
                <!-- Input for edits -->
                <textarea rows="1" v-model="editedMessage" v-show="editingPreview == true" @keydown.enter="editThisEntry()" />
            </div>
            <div @mouseenter="$emit('highlight')" @mousedown="$emit('highlightMe')">
                <!-- Note details -->
                <p  v-show="editingPreview == false" class="noselect"> {{ details }} </p>
            </div>
        </div>

        <div class="button-date-container">
            
            <!-- Date -->
            <p  class="date noselect" >
                <!--    this line here would not work without the exclamation points, 
                        is that okay or have I done something wrong? -->
                {{created!.toLocaleTimeString()}} {{created!.toLocaleDateString()}} 
            </p>
            <!-- Buttons -->
            <div class="two-buttons-container">
                <button class="edit button" @click="editThisEntry()"><p class="edit-text">Edit</p></button>
                <button class="delete button" @click="deleteThisEntry()">
                    <img src="src\assets\trash.png" alt="Delete" width="20" height="20" class="delete-icon">
                </button>
            </div>
        </div>
    </div>

</template>


<script lang="ts">
import { ref, defineComponent } from 'vue'
import ToDoList from './ToDoEntriesList.vue';
export default defineComponent({
    emits: ['edit','delete','highlight','highlightMe'],
    props: {
        details: String,
        created: Date,
        key: Number,
        highlighted: Boolean
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
    .noselect {
        -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Safari */
            -khtml-user-select: none; /* Konqueror HTML */
            -moz-user-select: none; /* Old versions of Firefox */
                -ms-user-select: none; /* Internet Explorer/Edge */
                    user-select: none; /* Non-prefixed version, currently
                                        supported by Chrome, Edge, Opera and Firefox */
    }
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
    .entry-container-highlighted{
        background-color: #3f1780;
    }

    .details-container {
        flex: 2 1;
        margin-top: -1%;
        margin-bottom: -1%;
        margin-left: 0%;
        /* background-color: rgb(166, 165, 167); */
    }

    /* applied to both text and input */
    .details-container > div {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        margin-left: 1%;
        
        /* background-color: rgb(13, 10, 15); */
    }

    .details-container > div > p {
        flex: 1 1;
        word-wrap: break-word;
        font-size: 140%;
        text-align: left;
        padding: .8em;
        margin: 0.2em;
        margin-left: -.8em;
        
        /* background-color: rgb(87, 0, 173); */
    }

    .details-container > div > textarea {
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
        max-height: 2.4em;
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
        .delete{
            max-width: 1em;
        }
        .edit{
            max-width: 3em;
        }
        .edit-text {
            margin: 0em;
            margin-left: -0.6em;
        }
        .delete-icon{
            margin-left: -.6em;
        }
    .two-buttons-container {
        display: flex;
    }

    @media (max-width: 1000px) {
        .details-container > div > p {
            word-wrap: break-word;
            font-size: 100%;
            margin-left: 0em;
        }
        .details-container > div > textarea {
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
            max-width: 1em;
        }
        .edit{
            max-width: 3em;
            text-align: center;
        }
        .edit-text {
            margin: 0em;
            margin-left: -0.6em;
        }
        .button{
            flex: 1 1;
            height: 1.5em;
            padding-top: 1%;
        }
        .delete-icon{
            margin-left: -.6em;
        }
    }


</style>