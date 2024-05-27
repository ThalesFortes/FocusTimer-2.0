import * as timer from "./timer.js"
import state from "./state.js"

export function startRunning(){
    document.documentElement.classList.add('running')
    document.documentElement.classList.remove('stop')
    state.isRunning = true
    timer.countdow()
}

export function stopTimer(){
    document.documentElement.classList.remove('running')
    document.documentElement.classList.add('stop')
    state.isRunning = false
}


export function addMinutes(){
    console.log('addMinutes')
}


export function reduceMinutes(){
    console.log('reduceMinutes')
}


              