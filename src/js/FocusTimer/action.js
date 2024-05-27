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
    state.minutes += 5
    if (state.minutes > 60){
        state.minutes = 60
        return
    } 
    timer.updateDisplay(state.minutes,0)
}


export function reduceMinutes(){
    state.minutes -= 5
    if (state.minutes < 0){
        state.minutes = 0
        return
    } 
    timer.updateDisplay(state.minutes,0)
    console.log('click')
}


              