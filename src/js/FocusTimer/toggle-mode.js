import * as el from "./elements.js"

export function forest() {
    el.forest.addEventListener('click', (event) => {
        const forest = event.target
        if (forest.classList.contains('forest')){
            console.log(forest)
        }
        
        
    });
}
