import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {LooseToDoEntry} from './components/types'


var newEntryList:Array<LooseToDoEntry> = [
    {   details: "Improve new todo list app"},
    {   details: "Make Coffee"},
    {   details: "This list is passed in with props"}];

createApp(App).mount('#app', {
    props: {
        list: newEntryList
    }
})