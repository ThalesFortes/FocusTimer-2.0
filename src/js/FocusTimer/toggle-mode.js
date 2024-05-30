import * as el from "./elements.js"
import * as sounds from "./sounds.js"

export function forest() {
    let theme; 
    el.themes.addEventListener('click', (event) => {
        
        if (event.target.classList.contains('forest')){
             theme = 'forest'
             document.documentElement.classList.toggle(theme)
             event.target.classList.add('forest')
             sounds.click.play()
        }

        if (event.target.classList.contains('rain')){
            theme = 'rain'
            document.documentElement.classList.toggle(theme)
             event.target.classList.add('rain')
             sounds.click.play()
            console.log(theme)
        }

        if (event.target.classList.contains('cafet')){
            theme = 'cafet'
            document.documentElement.classList.toggle(theme)
             event.target.classList.add('rain')
             sounds.click.play()
            console.log(theme)
        }
        
        if (event.target.classList.contains('fireplace')){
            theme = 'fireplace'
            document.documentElement.classList.toggle(theme)
             event.target.classList.add('rain')
             sounds.click.play()
            console.log(theme)
        }
    });
}
