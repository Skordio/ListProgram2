export interface LooseToDoEntry {
    details:        string,
    created?:       Date,
    id?:            number,
    highlighted?:   boolean,
    done?:          boolean,
    estTime?:        number
}