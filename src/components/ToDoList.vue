<template>
    <!-- Top Bar, fixed to top of screen -->
    <!-- WIP, will get rid of styling -->
    <div class="header-bar-container">
        <ToDoEntryBox :entriesList="list" />
    </div>
    
    <!-- List, -->
    <div class="entry-list-container">
        <ToDoEntriesList :entriesList="list"/>
    </div>
    <div class="ui-container">
        <button @click="selectAll">Select All</button>
        <button @click="deSelectAll">Deselect All</button>
        <button @click="deleteHighlightedEntries">Delete Selected</button>

    </div>
</template>

<script lang="ts">
    import ToDoEntriesList from './ToDoEntriesList.vue'
    import ToDoEntryBox from './ToDoEntryBox.vue';
    import {LooseToDoEntry} from './types'
    import { onMounted, ref, reactive, defineComponent } from 'vue'
    export default defineComponent({
        props: {
            list: Array<LooseToDoEntry>
        },
        components: {
            ToDoEntriesList,
            ToDoEntryBox
        },
        setup(props) {
            //this does not work yet, the idea was to fix entries that don't come in with a good id or date
            let deleteHighlightedEntries = () => {
				if(props.list)
					for (var i = props.list.length-1; i >= 0; i--) {
                        if(props.list[i].highlighted)
                            props.list.splice(i, 1)
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
			let fixEntries = () => {
				if(props.list)
					for(var i = 0; i < props.list.length; i++) {
                        props.list[i].id = i
                        props.list[i].highlighted = false;
						if(!('created' in props.list[i])) {
							props.list[i].created = new Date()
						}
					}
			}
            onMounted(() => {
				fixEntries();
			})
            return {
                deleteHighlightedEntries,
                selectAll,
                deSelectAll
            }
        }
    })
</script>

<style>
/* this flexbox is for positioning at top of screen */
.header-bar-container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    overflow: hidden;

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

    top: 3.5em;
    left: 1em;
    right: 5em;
    position: absolute;
}

.ui-container {
    display: flex;
    flex-flow: column;
    position: fixed;
    top: 7.3em;
    right: 2em;
    width: 6em;
    padding: .5em;
    gap: 10px;

    background-color: rgb(29, 104, 168);
    border-radius: 1em;
}
</style>