import * as el from "./elements.js"

export function forest() {
    let theme; 
    el.themes.addEventListener('click', (event) => {
        
        if (event.target.classList.contains('forest')){
             theme = 'forest'
             console.log(theme)
        }

        if (event.target.classList.contains('rain')){
            theme = 'rain'
            console.log(theme)
        }

        if (event.target.classList.contains('cafet')){
            theme = 'cafet'
            console.log(theme)
        }
        
        if (event.target.classList.contains('fireplace')){
            theme = 'fireplace'
            console.log(theme)
        }
    });
}
