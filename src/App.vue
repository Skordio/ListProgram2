
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
            list: Array<string>
        },
        setup(props) {
            let convertToEntries = (earlyList: Array<string>) => {
                var newArray = new Array<LooseToDoEntry>();
                for(var i = 0; i < earlyList.length; i++) {
                    if(earlyList[i] != "")
                        newArray.push({details: earlyList[i]})
                }
                return newArray;
            }
            if(props.list)
                var newList = props.list;
            else
                var newList = [""];


            const entriesList = ref(convertToEntries(newList))
            return {
                entriesList
            }
        }
    })
</script>