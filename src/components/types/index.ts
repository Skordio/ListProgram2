export interface ToDoEntryInterface {
    details:    string,
    created:    Date
    id:         number
}

export interface LooseToDoEntry {
    details:    string,
    created?:   Date,
    id?:        number
}