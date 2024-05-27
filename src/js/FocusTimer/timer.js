import * as el from "./elements.js"
import state from "./state.js"
import { finish } from "./sounds.js"

export function updateDisplay(minutes, seconds){
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(minutes).padStart(2,'0')
    el.seconds.textContent = String(seconds).padStart(2,'0')

}



export function countdow(){
    clearTimeout(state.countdownId)   
     
    if (state.isRunning === false){
        return
    } 

    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)
    seconds--

    if (seconds < 0){
        seconds = 59
        minutes --
    }

    if (minutes < 0){
        finish.play()
        return
    }

    updateDisplay(minutes,seconds)

    state.countdownId = setTimeout(() => countdow(), 1000)


}

