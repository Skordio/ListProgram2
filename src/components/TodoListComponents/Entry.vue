<template>
    <!-- Buttons -->
        <ToDoEditButton @click="editThisEntry()" />
        <ToDoDeleteButton @click="deleteThisEntry()" />

    <!-- Input for edits -->
        <input 
            ref="editingInput"
            v-model="editedMessage" 
            v-if="editingPreview == true"
            @keydown.enter="editThisEntry()"
            style="position: absolute;
                z-index: 10; 
                bottom: .8em;
                left: 10.8em;
                font-size: 1em;
                width:37em;
                text-align: left;"/>

    <!-- Note details -->
        <p 
            v-if="editingPreview == false"
            style="position: absolute;
                top: -0.6em;
                left: 11em;
                font-size: 1em;
                width:36em;
                text-align: left;"
            
            :style="{'z-index': zvalue}"
            >

            {{ details }}
        </p>

    <!-- Date -->
        <p
            style="position: absolute;
                top: -0.6em;
                left: 11em;
                font-size: 1em;
                width:48em;
                text-align: right;">
        <!--  -->
            {{created.toLocaleTimeString()}} {{created.toLocaleDateString()}} 
        </p>
        <div :style="{height: calculatePadding() + 'em'}"></div>

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
        calculatePadding() {
            return this.characters!/47;
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
