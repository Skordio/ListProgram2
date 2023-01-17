<template>
    
    <div>
        <div class="entry-container" 
            :class="[{'entry-container-highlighted': highlighted},{'entry-container-done': done}]" >
            <div class="details-container">
                <div>
                    <textarea rows="1" v-model="editedMessage" v-show="editingPreview == true" @keydown.enter="editThisEntry()" />
                </div>
                <div @mouseenter="$emit('highlight')" @mousedown="$emit('highlightMe')">
                    <p  v-show="editingPreview == false" class="noselect" test="entry-text"> {{ details }} </p>
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
                    <button class="delete button" @click="$emit('delete')">
                        <img src="src\assets\trash2.png" alt="Delete" width="20" height="20" class="icon">
                    </button>
                    <button class="done button" @click="$emit('done')">
                        <img src="src\assets\check2.png" alt="Done" width="20" height="20" class="icon">
                    </button>
                    <input v-model="estimatedTime" placeholder="est. time (hrs)" class="est-time" @keyup="$emit('timeEdit', estimatedTime)" />
                </div>

                
            </div>
        </div>
    </div>

</template>


<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
    emits: ['edit','delete','highlight','highlightMe','done','timeEdit'],
    props: {
        details: String,
        created: Date,
        key: Number,
        highlighted: Boolean,
        done: Boolean,
        estTime: Number
    },
    setup(props, {emit}) {
        const editingPreview = ref(false);
        const editedMessage = ref(props.details)
        const created = ref(props.created);
        const zvalue = ref(10)
        const estimatedTime = ref('')
        //used to edit an entry, reads from the v-model and emits to the list so that
        //the details can be changed
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
            editThisEntry,
            editingPreview,
            editedMessage,
            created,
            zvalue,
            estimatedTime
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
		border-radius: 1.5em;
    }
        .entry-container-highlighted{
            background-color: #3f1780;
            border-radius: 1em;
        }
        .entry-container-done{
            border: 3px solid green;
        }

    .details-container{
        flex: 2 1;

        margin-top: -1em;
        margin-bottom: -1em;
        margin-left: 0%;
    }
        .details-container > div {
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;

            margin-left: 1%;
        }
        .details-container > div > p {
            flex: 1 1;

            font-size: 140%;
            word-wrap: break-word;
            text-align: left;
            padding: .8em;
            margin: 0.2em;
            margin-left: -.8em;
        }
        .details-container > div > textarea {
            flex: 1 2;
            justify-self: stretch;

            font-size: 140%;
            text-align: left;
            margin: 1%;
            margin-left: 1px;
        }
    .button-date-container {
        display: flex;
        align-self: flex-start;
        align-content: center;

        margin-right: 1em;
        margin-top: -0.2em;
        margin-bottom: -.2em;
        max-width: 20em;
    }
        .button{
            flex: 0 0;
            align-self: center;

            margin: 1%;
            max-height: 2.4em;
        }
        .date{
            flex: 1 1;

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
        .icon{
            margin-left: -.6em;
        }
        .done {
            max-width: 1em;
        }
        .two-buttons-container {
            display: flex;
            justify-content: center;
        }
        .est-time{
            text-align: center;
            max-height: 2.4em;
            min-height: 2.4em;
            border-radius: 1em;
            max-width: 4em;
            margin-top: 0.6em;
            margin-left: 0.1em;
            margin-right: -.5em;
        }

    @media (max-width: 1000px) {
        .details-container > div > p {
            word-wrap: break-word;
            font-size: 100%;
            margin-left: -0.5em;
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
            
            margin-right: 0em;
            margin-bottom: 0em;
        }
            .date{
                flex: 0 0;
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
            .est-time{
                min-height: 1.4em;
                border-radius: 1em;
                max-width: 3em;
                margin-right: 0.6em;
                margin-top: -0.1em;
            }
    }


</style>