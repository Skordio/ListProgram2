<template>
    <div class="header-bar-container">
        <ToDoEntryBox :list="list" />
    </div>
    
    <div class="entry-list-container">
        <ToDoEntriesList 
        :list="list"
        @time-edit="timeCalc"/>
    </div>

    <div class="ui-container">
        <button @click="selectAll" class="select-ui">Select All</button>
        <button @click="deSelectAll" class="select-ui">Deselect All</button>
        <button @click="deleteHighlightedEntries" class="delete-ui">Delete Selected</button>
        <button @click="notDoneSelected" class="done-ui">Not Done Selected</button>
        <button @click="doneSelected" class="done-ui">Done Selected</button>
        <button class="totalTime">Total Est. Time: {{ totalTime }} hrs</button>
    </div>
</template>

<script lang="ts">
    import ToDoEntriesList from './ToDoEntriesList.vue'
    import ToDoEntryBox from './ToDoEntryBox.vue';
    import {LooseToDoEntry} from './types'
    import { onBeforeMount, ref, defineComponent } from 'vue'
    export default defineComponent({
        props: {
            list: Array<LooseToDoEntry>
        },
        components: {
            ToDoEntriesList,
            ToDoEntryBox
        },
        setup(props) {
            const totalTime = ref(0)

            let deleteHighlightedEntries = () => {
				if(props.list) {
					for (var i = props.list.length-1; i >= 0; i--) {
                        if(props.list[i].highlighted)
                            props.list.splice(i, 1)
                    }
                    timeCalc()
                }
            }
            let selectAll = () => {
                if(props.list) {
					for (var i = props.list.length-1; i >= 0; i--) {
                        if(!props.list[i].highlighted)
                            props.list[i].highlighted = true;
                    }
                }
            }
            let deSelectAll = () => {
                if(props.list) {
					for (var i = props.list.length-1; i >= 0; i--) {
                        if(props.list[i].highlighted)
                            props.list[i].highlighted = false;
                    }
                }
            }
            let doneSelected = () => {
                if(props.list) {
                    for(var i = 0; i < props.list.length; i++) {
                        if(props.list[i].highlighted)
                            props.list[i].done= true;
                    }
                    timeCalc();
                    deSelectAll();
                }
            }
            let notDoneSelected = () => {
                if(props.list) {
                    for(var i = 0; i < props.list.length; i++) {
                        if(props.list[i].highlighted)
                            props.list[i].done= false;
                    }
                    timeCalc()
                    deSelectAll();
                }
            }
			let fixEntries = () => {
				if(props.list)
					for(var i = 0; i < props.list.length; i++) {
						props.list[i].created = new Date();
                        props.list[i].id = i;
                        props.list[i].highlighted = false;
                        props.list[i].done = false;
                        props.list[i].estTime = 0;
					}
			}
            let timeCalc = () => {
                if(props.list) {
                    var sum = 0;
					for(var i = 0; i < props.list.length; i++) {
                        if(!(props.list[i].done!))
                            sum = +sum + +props.list[i].estTime! ;
					}
                    totalTime.value = parseInt('' + sum)
                }
            }
            onBeforeMount(() => {
				fixEntries();
			})
            return {
                deleteHighlightedEntries,
                selectAll,
                deSelectAll,
                doneSelected,
                notDoneSelected,
                timeCalc,
                totalTime
            }
        }
    })
</script>

<style scoped>
/* this flexbox is for positioning at top of screen */
.header-bar-container {
    top: 1.5em;
    left: 1.5em;
    right: 1.5em;
    position: fixed;
    z-index: 1;
}

.entry-list-container {
    /* background-color: #929194; */
    display: flex;
    flex-flow: column;

    top: 7em;
    left: 1.2em;
    right: 8.5em;
    position: absolute;
}

.ui-container {
    display: flex;
    flex-flow: column;
    position: fixed;
    top: 7.3em;
    right: 1.5em;
    width: 6em;
    padding: .5em;
    gap: 5px;

    background-color: rgb(29, 104, 168);
    border-radius: 1em;
}
    .select-ui {
        background-color: rgb(64, 39, 104);
    }
    .delete-ui {
        background-color: #570808;
    }
    .done-ui {
        background-color: #063b0a;
    }
    .totalTime, .totalTime:hover {
        cursor: default;
        border: 0px;
    }
</style>