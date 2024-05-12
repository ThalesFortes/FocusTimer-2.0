import * as elements from './elements.js'
import * as actions from './action.js'

export function counterControls(){
    elements.controls.addEventListener('click',(event)=>{
    const action = event.target.dataset.action
        if (typeof  actions[action] != 'function'){
            return
        }
        actions[action]()
  })
}