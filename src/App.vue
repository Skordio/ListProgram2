
<template>
    <div>
        <ToDoList :list="entriesList"/>
    </div>
</template>

<script lang="ts">
    import ToDoList from './components/ToDoList.vue'
    import {LooseToDoEntry} from './components/types'
    import { ref, defineComponent } from 'vue'
    export default defineComponent({
        components: {
            ToDoList
        },
        props: {
            list: Array<LooseToDoEntry>
        },
        setup(props) {
            // let convertToEntries = (earlyList: Array<string>) => {
            //     var newArray = new Array<LooseToDoEntry>();
            //     for(var i = 0; i < earlyList.length; i++) {
            //         if(earlyList[i] != "")
            //             newArray.push({details: earlyList[i]})
            //     }
            //     return newArray;
            // }
            var newList:Array<LooseToDoEntry> = [];
            if(!(props.list == undefined))
                newList = props.list;

            const entriesList = ref(newList)
            return {
                entriesList
            }
        }
    })
</script>