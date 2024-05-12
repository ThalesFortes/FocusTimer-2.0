import state from '../FocusTimer/state.js'
import { counterControls } from './events.js'

export function start(minutes,seconds){
    state.minutes = minutes
    state.seconds = seconds

    counterControls()
}