<template>
    
	<div class="entry-container">
        <!-- Buttons -->
        <ToDoEditButton class="edit button" @click="editThisEntry()" />
        <ToDoDeleteButton class="delete button" @click="deleteThisEntry()" />

            <div>
                <div  class="entry-edit-container">
                    <!-- Input for edits -->
                    <input 
                        v-model="editedMessage" 
                        v-if="editingPreview == true"
                        @keydown.enter="editThisEntry()"
                        style=" word-wrap: break-word;
                                font-size: 1em;
                                text-align: left;"/>
                </div>
                <div  class="entry-edit-container">
                    <!-- Note details -->
                    <p  v-if="editingPreview == false" 
                        style=" font-size: 1em; 
                                text-align: left;"
                        :style="{'z-index': zvalue}" >

                        {{ details }}
                    </p>
                </div>
            </div>

    <!-- Date -->
        <p  style=" font-size: 1em; 
                    width:66.5em; 
                    text-align: right;" >

            {{created.toLocaleTimeString()}} {{created.toLocaleDateString()}} 
        </p>
    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ToDoDeleteButton from './DeleteButton.vue';
import ToDoEditButton from './EditButton.vue';
import ToDoList from '../ToDoList.vue';
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
    components: {
        ToDoDeleteButton,
        ToDoEditButton
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
    .button{
        flex: 1 1;
        order: 1
    }

    .entry-edit-container{
        display: flex;
        align-items: center;
        flex: 1 1 30em;
        order: 2
    }

    .date{
        flex: 1 1;
        order: 4
    }

    

	.entry-container{
        display: flex;
    }
</style>