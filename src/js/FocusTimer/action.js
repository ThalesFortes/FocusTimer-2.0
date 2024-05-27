import * as timer from "./timer.js"
import state from "./state.js"

export function startRunning(){
    document.documentElement.classList.toggle('running')
    state.isRunning = !state.isRunning
    timer.countdow()
}

export function stopTimer(){
    console.log('stopTimer')
}


export function addMinutes(){
    console.log('addMinutes')
}


export function reduceMinutes(){
    console.log('reduceMinutes')
}


              