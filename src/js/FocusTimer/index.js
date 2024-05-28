import state from './state.js'
import { counterControls } from './events.js'
import * as timer from './timer.js'
import * as toggle from "./toggle-mode.js"

export function start(minutes,seconds){
    state.minutes = minutes
    state.seconds = seconds
    timer.updateDisplay()
    counterControls()
    toggle.forest()
}